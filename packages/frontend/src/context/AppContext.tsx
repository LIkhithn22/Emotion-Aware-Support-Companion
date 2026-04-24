/**
 * AppContext — Global React context stub
 *
 * Manages cross-UC application state:
 *   - currentUser      (UC01 — set after session creation)
 *   - activeSession    (UC01, UC02, UC08)
 *   - privacySettings  (UC07 — affects logging/storage across all UCs)
 *
 * TODO: Add state slices and actions as each UC is implemented.
 */
import { createContext, useContext, useReducer, type ReactNode } from 'react';

// ── State shape ───────────────────────────────────────────────────────────────
interface AppState {
  currentUserId: number | null;
  activeSessionId: number | null;
  storeHistory: boolean;
}

const initialState: AppState = {
  currentUserId: null,
  activeSessionId: null,
  storeHistory: true,
};

// ── Actions ───────────────────────────────────────────────────────────────────
type AppAction =
  | { type: 'SET_USER'; userId: number }
  | { type: 'SET_SESSION'; sessionId: number }
  | { type: 'CLEAR_SESSION' }
  | { type: 'SET_STORE_HISTORY'; value: boolean };

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUserId: action.userId };
    case 'SET_SESSION':
      return { ...state, activeSessionId: action.sessionId };
    case 'CLEAR_SESSION':
      return { ...state, activeSessionId: null };
    case 'SET_STORE_HISTORY':
      return { ...state, storeHistory: action.value };
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────
interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
