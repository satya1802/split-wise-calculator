# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `b6fabef` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This repository is a Quorq AI SDLC-generated 'split wise calculator' project containing two independently run applications: a frontend Vite + React 19 SPA with approved, designed screens currently rendering seeded sample data, and a FastAPI backend that is still a scaffold exposing only a /health endpoint (no approved architecture had been defined for it yet). The backend uses SQLAlchemy with a SQLite database by default (swappable via DATABASE_URL), and docker-compose.yml provisions optional Postgres and Redis services for a fuller local environment. The frontend is built with Vite, styled via Tailwind CSS, tested with Vitest and Playwright, and the backend is tested with pytest and linted/formatted with Ruff.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for Vite 6 / React 19 toolchain)
- npm
- Python 3.12
- pip
- Docker and Docker Compose (optional, for Postgres/Redis via docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. git clone <repo> and cd into it
2. cp .env.example .env (fill in any values it defines)
3. cd frontend && npm install
4. cd ../backend && pip install -r requirements.txt
5. (optional) from the repo root, run docker-compose up -d to start Postgres and Redis if the backend is pointed at them via DATABASE_URL
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA (run from frontend/) |
| frontend build | `npm run build` | Bundles the app with Vite; does not typecheck (run from frontend/) |
| frontend preview | `npm run preview` | Serves the built frontend bundle locally (run from frontend/) |
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI backend with auto-reload (run from backend/) |
| docker services | `docker-compose up -d` | Starts Postgres 16 (db) and Redis 7 (redis-queue) containers defined in docker-compose.yml (run from repo root) |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `frontend/` | Vite + React 19 SPA; approved screens rendering seeded sample data |
| `frontend/src` | Application source: entry point (main.tsx), shared lib (api.ts, ui.tsx, icons.tsx, navigate.ts), styles |
| `frontend/e2e` | Playwright acceptance test specs |
| `backend/` | FastAPI service scaffold |
| `backend/app` | Application code: entrypoint (main.py), DB engine/session (database.py), SQLAlchemy models (models.py), Pydantic schemas (schemas.py), services.py, routers/ package |
| `backend/tests` | pytest test suite (currently just a health check test) |
| `.quorq/` | Quorq platform handoff metadata (handoff.json) |
| `docker-compose.yml` | Local Postgres and Redis service definitions |
| `.env.example` | Template for required environment variables |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend organizes endpoints into one router per architecture component under backend/app/routers/
- Every generated backend route currently returns a typed StubResponse placeholder (schemas.py) until implemented
- SQLAlchemy Base is declared in database.py; models.py defines tables and is imported in main.py before Base.metadata.create_all runs
- Backend DB defaults to SQLite (sqlite:///./app.db) and is overridden via the DATABASE_URL env var; SQLite connections use check_same_thread=False for FastAPI's threadpool
- CORS origins are configured via the ALLOWED_ORIGINS env var (comma-separated), defaulting to the Vite dev server origins (localhost:5173 / 127.0.0.1:5173)
- Frontend API calls are centralized in src/lib/api.ts via apiFetch(), using VITE_API_BASE_URL and VITE_API_SECRET_KEY build-time env vars; screens do not yet call the backend
- Frontend component tests live beside the components/screens they cover; Playwright e2e specs live in e2e/ separate from Vitest's src/ scope
- Frontend uses ESLint + Prettier; backend uses Ruff for both linting and formatting
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| frontend unit tests | `npm run test` | Runs Vitest component tests (run from frontend/) |
| frontend e2e tests | `npm run test:e2e` | Runs Playwright acceptance tests from e2e/; builds/serves the app locally unless E2E_BASE_URL is set (run from frontend/; install browsers first with npm run test:e2e:install) |
| frontend lint | `npm run lint` | Runs ESLint over the frontend app (run from frontend/) |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit (run from frontend/) |
| backend tests | `pytest` | Runs the backend pytest suite (run from backend/) |
| backend lint | `ruff check .` | Lints the backend codebase (run from backend/) |
| backend format | `ruff format .` | Formats the backend codebase (run from backend/) |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend requests to the backend are blocked by CORS | Set ALLOWED_ORIGINS in the backend environment to include the frontend's origin, or rely on the default localhost:5173/127.0.0.1:5173 for local dev |
| pytest fails with 'ModuleNotFoundError: No module named app' | Run pytest from the backend/ directory; pytest.ini sets pythonpath = . so imports resolve from there |
| Playwright e2e tests fail to launch a browser | Run npm run test:e2e:install first to fetch the Chromium browser |
| npm run build succeeds but tsc reports type errors later | Run npm run typecheck (tsc --noEmit) before relying on a build, since build does not typecheck |
<!-- sdlc:auto:end troubleshooting -->
