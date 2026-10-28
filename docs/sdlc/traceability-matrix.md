# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Register with email and password | US-001 | 1 | POST /auth/register, api, db, email, email_verifications, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Verify email address | US-002 | 1 | GET /auth/verify, POST /auth/resend-verification, api, db, email, email_verifications, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Log in and log out | US-003 | 1 | POST /auth/login, POST /auth/logout, api, db, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-004 | EPIC-002 | Create a persistent group | US-004 | 1 | GET /groups, POST /groups, api, db, group_members, groups | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-002 | Set the group's default currency | US-005 | 1 | PATCH /groups/{id}, api, db, groups | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-002 | Invite members by email or shareable link | US-006 | 2 | POST /groups/{id}/invitations, api, db, email, groups, invitations | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-007 | EPIC-002 | Join a group via invitation | US-007 | 2 | POST /invitations/{token}/accept, api, db, group_members, invitations, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-008 | EPIC-002 | Manage group members | US-008 | 2 | DELETE /groups/{id}/members/{user_id}, GET /groups/{id}/members, api, db, group_members | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-003 | Log an expense recording who paid | US-009 | 2 | GET /groups/{id}/expenses, POST /groups/{id}/expenses, api, db, expense_splits, expenses | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-003 | Split an expense by equal shares, exact amounts, percentages, or shares/weights | US-010, US-010-T1, US-010-T2, US-010-T3, US-010-T4 | 3 | POST /groups/{id}/expenses, api, db, expense_splits, expenses, web | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-011 | EPIC-003 | Edit or delete my own expense | US-011 | 3 | DELETE /expenses/{id}, PATCH /expenses/{id}, api, db, expense_splits, expenses | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-012 | EPIC-004 | View group balance dashboard | US-012 | 3 | GET /groups/{id}/balances, api, db, expense_splits, expenses, group_members, settlements, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-004 | See simplified who-owes-whom settlement suggestions | US-013 | 4 | GET /groups/{id}/settlement-suggestions, api, db, expense_splits, expenses, settlements | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-004 | Record a manual repayment/settlement | US-014 | 4 | POST /groups/{id}/settlements, api, db, settlements | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-015 | EPIC-005 | Notify members when a new expense is added | US-015, US-015-T1, US-015-T2, US-015-T3, US-015-T4 | 4 | api, db, email, expenses, notifications, queue, worker | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-016 | EPIC-005 | Send payment reminders to members who owe money | US-016 | 5 | db, email, expenses, notifications, queue, settlements, worker | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-017 | EPIC-005 | View in-app notifications | US-017 | 5 | GET /notifications, POST /notifications/{id}/read, api, db, notifications, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
