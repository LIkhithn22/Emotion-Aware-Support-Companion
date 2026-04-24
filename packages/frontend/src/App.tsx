import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomeScreen from './pages/HomeScreen';
import ConsentScreen from './pages/ConsentScreen';
import ChatInterface from './pages/ChatInterface';
import PrivacySettingsPage from './pages/PrivacySettingsPage';
import SessionHistoryView from './pages/SessionHistoryView';
import FeedbackFormUI from './pages/FeedbackFormUI';

/**
 * App — root router shell
 *
 * Route map (maps to boundary objects in the project proposal):
 *   /                  → HomeScreen            (UC01)
 *   /consent           → ConsentScreen         (UC01, UC06)
 *   /chat/:sessionId   → ChatInterface         (UC02, UC03, UC04, UC05, UC08)
 *   /privacy           → PrivacySettingsPage   (UC07)
 *   /history           → SessionHistoryView    (UC09)
 *   /feedback/:sessionId → FeedbackFormUI      (UC10)
 *
 * All page components are stubs until the corresponding UC is implemented.
 */
export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/consent" element={<ConsentScreen />} />
          <Route path="/chat/:sessionId" element={<ChatInterface />} />
          <Route path="/privacy" element={<PrivacySettingsPage />} />
          <Route path="/history" element={<SessionHistoryView />} />
          <Route path="/feedback/:sessionId" element={<FeedbackFormUI />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
