# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Core authentication (register, verify, login/logout) and group creation with default currency.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Register with email and password | 5 | backend-agent | — |
| US-002 | Story | Verify email address | 3 | backend-agent | US-001 |
| US-003 | Story | Log in and log out | 5 | backend-agent | US-002 |
| US-004 | Story | Create a persistent group | 3 | backend-agent | US-003 |
| US-005 | Story | Set the group's default currency | 2 | backend-agent | US-004 |

## Sprint 2: Sprint 2

Group invitations, membership management, and basic expense logging.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-006 | Story | Invite members by email or shareable link | 5 | backend-agent | US-004 |
| US-007 | Story | Join a group via invitation | 5 | backend-agent | US-006 |
| US-008 | Story | Manage group members | 3 | backend-agent | US-004, US-007 |
| US-009 | Story | Log an expense recording who paid | 5 | backend-agent | US-004, US-007 |

## Sprint 3: Sprint 3

Four expense split methods, edit/delete own expenses, and the balance dashboard.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-010 | Story | Split an expense by equal shares, exact amounts, percentages, or shares/weights | 8 | backend-agent | US-009 |
| ↳ US-010-T1 | Task | Implement equal and exact split calculation and validation | — | backend-agent | — |
| ↳ US-010-T2 | Task | Implement percentage and shares/weights split calculation and validation | — | backend-agent | — |
| ↳ US-010-T3 | Task | Build split-method selector and input UI | — | frontend-agent | — |
| ↳ US-010-T4 | Task | Add split calculation test suite | — | qa-agent | — |
| US-011 | Story | Edit or delete my own expense | 5 | backend-agent | US-009, US-010 |
| US-012 | Story | View group balance dashboard | 5 | frontend-agent | US-009, US-010 |

## Sprint 4: Sprint 4

Settlement suggestions, manual settlement recording, and background new-expense notifications.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-013 | Story | See simplified who-owes-whom settlement suggestions | 5 | backend-agent | US-012 |
| US-014 | Story | Record a manual repayment/settlement | 5 | backend-agent | US-012 |
| US-015 | Story | Notify members when a new expense is added | 8 | integration-agent | US-009 |
| ↳ US-015-T1 | Task | Set up Redis-backed background job dispatch for notifications | — | devops-agent | — |
| ↳ US-015-T2 | Task | Implement email notification sending via SendGrid with failure handling | — | integration-agent | — |
| ↳ US-015-T3 | Task | Create in-app notification records on new expense creation | — | backend-agent | — |
| ↳ US-015-T4 | Task | Trigger notification job from the expense creation flow | — | backend-agent | — |

## Sprint 5: Sprint 5

Scheduled payment reminders and the in-app notification inbox.

Capacity: 20 points · Committed: 8

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-016 | Story | Send payment reminders to members who owe money | 5 | integration-agent | US-014 |
| US-017 | Story | View in-app notifications | 3 | frontend-agent | US-015 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
