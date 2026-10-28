# API Reference

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start endpoints -->
| Method | Path | Handler | Source | Summary |
|---|---|---|---|---|
| GET | /health | health | `backend/app/main.py:43` | Liveness probe, and the only route here that is not a stub. |
<!-- sdlc:auto:end endpoints -->

<!-- sdlc:auto:start drift -->
**Designed but missing:**

- DELETE /expenses/{id}
- DELETE /groups/{id}/members/{user_id}
- GET /auth/verify
- GET /groups
- GET /groups/{id}/balances
- GET /groups/{id}/expenses
- GET /groups/{id}/members
- GET /groups/{id}/settlement-suggestions
- GET /notifications
- PATCH /expenses/{id}
- PATCH /groups/{id}
- POST /auth/login
- POST /auth/logout
- POST /auth/register
- POST /auth/resend-verification
- POST /groups
- POST /groups/{id}/expenses
- POST /groups/{id}/invitations
- POST /groups/{id}/settlements
- POST /invitations/{token}/accept
- POST /notifications/{id}/read
<!-- sdlc:auto:end drift -->

<!-- sdlc:auto:start source -->
Generated from commit `b6fabef`
<!-- sdlc:auto:end source -->
