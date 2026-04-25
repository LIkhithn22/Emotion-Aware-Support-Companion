# Emotion-Aware Support Companion

> CISC 699 Capstone Project — Harrisburg University of Science and Technology

An Emotion-Aware Support Companion is a text-based system that detects users' emotions from language and context, then provides transparent, supportive, and ethically constrained responses without making clinical claims.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (Vite), Vanilla CSS Modules, React Router v6 |
| Backend | Node.js 20 LTS, Express.js, TypeScript |
| Emotion Analysis | Rule-based lexicon classifier (`compromise` NLP) |
| Database | PostgreSQL 16 + Prisma ORM |
| Acceptance Tests | Cucumber.js (Gherkin), Playwright, Supertest |
| DevOps | Docker Compose, npm Workspaces |

---

## Project Structure

```
emotion-aware-support-companion/
├── packages/
│   ├── frontend/          # React + Vite web UI
│   ├── backend/           # Express REST API + Prisma
│   └── tests/             # Cucumber.js acceptance test suite
├── docker-compose.yml     # PostgreSQL dev + test databases
├── .env.example           # Environment variable template
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js ≥ 20
- npm ≥ 10
- Docker Desktop

### 1. Clone and install
```bash
git clone <repo-url>
cd emotion-aware-support-companion
cp .env.example packages/backend/.env
cp .env.example packages/tests/.env
npm install
```

### 2. Start the databases
```bash
docker compose up -d
```

### 3. Run database migrations
```bash
npm run db:migrate
```

### 4. Start backend and frontend
```bash
# In separate terminals:
npm run dev:backend
npm run dev:frontend
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001/api/v1

### 5. Run acceptance tests
```bash
npm run test:acceptance
```

---

## Use Cases (UC01–UC10)

| ID | Use Case |
|---|---|
| UC01 | InitiateConversation |
| UC02 | SendMessageForAnalysis |
| UC03 | GenerateSupportiveResponse |
| UC04 | ProvideCrisisSupportSuggestion |
| UC05 | RequestClarification |
| UC06 | ViewConsentInformation |
| UC07 | ManagePrivacyPreferences |
| UC08 | EndConversationSession |
| UC09 | ViewConversationHistory |
| UC10 | ProvideSessionFeedback |

Each use case is implemented independently following the 4-template acceptance methodology:
**Template 1 (Use Case → Gherkin) → Template 2 (UI/DB Design) → Template 3 (Implementation) → Template 4 (Repair Loop)**

---

## Development Methodology

This project follows the **Acceptance Testing Methodology for AI-Generated Code with UI and DB Integration**:

1. Run Template 1 → Review structured requirement + Gherkin
2. Run Template 2 → Review UI/DB/harness design
3. Run Template 3 → Generate integrated implementation
4. Run acceptance scenarios
5. If failures → Run Template 4 (repair loop)
6. Repeat until suite is green, then move to next UC
