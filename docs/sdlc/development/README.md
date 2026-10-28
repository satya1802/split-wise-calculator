# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-PLAN · approved · source: plan:approved

Development plan version 1 for the Splitwise calculator is approved, organized into 5 sprints of 20-point capacity each, covering 5 epics and 17 user stories across authentication, groups, expense splitting, balances/settlements, and notifications.

Plan status: approved (v1). Sprint goals: Sprint 1 - core authentication (register, verify, login/logout) and group creation with default currency; Sprint 2 - group invitations, membership management, and basic expense logging; Sprint 3 - four expense split methods, edit/delete own expenses, and the balance dashboard; Sprint 4 - settlement suggestions, manual settlement recording, and background new-expense notifications; Sprint 5 - scheduled payment reminders and the in-app notification inbox. Backlog contains 5 epics (EPIC-001..EPIC-005), 17 user stories (US-001..US-017), and 8 supporting tasks (US-010-T1..T4, US-015-T1..T4) assigned across backend-agent, frontend-agent, qa-agent, devops-agent, and integration-agent roles.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006, US-007, US-008, US-009, US-010, US-011, US-012, US-013, US-014, US-015, US-016, US-017

- ⚠ Input provided is the approved backlog/sprint plan only; no ticket status, code commits, PRs, or completion evidence was supplied, so actual development progress cannot be documented yet.

### SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 targets core authentication and initial group creation, with 20-point capacity.

Goal: core authentication (register, verify, login/logout) and group creation with default currency. Capacity: 20 points. Stories matching this goal: US-001 Register with email and password (5 pts), US-002 Verify email address (3 pts), US-003 Log in and log out (5 pts), US-004 Create a persistent group (3 pts), US-005 Set the group's default currency (2 pts) - totaling 18 of 20 points.

**Related:** US-001, US-002, US-003, US-004, US-005

- ⚠ Story-to-sprint assignment is inferred from matching the sprint goal wording to story titles; the plan input does not explicitly tag item IDs to sprint numbers.
- ⚠ No execution status (in progress/done) reported for this sprint.

### SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 targets group invitations, membership management, and initial expense logging, with 20-point capacity.

Goal: group invitations, membership management, and basic expense logging. Capacity: 20 points. Matching stories: US-006 Invite members by email or shareable link (5 pts), US-007 Join a group via invitation (5 pts), US-008 Manage group members (3 pts), US-009 Log an expense recording who paid (5 pts) - totaling 18 of 20 points.

**Related:** US-006, US-007, US-008, US-009

- ⚠ Sprint assignment inferred from goal text, not an explicit item-to-sprint mapping in the input.
- ⚠ No execution status reported for this sprint.

### SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 covers the four expense split methods, editing/deleting own expenses, and the balance dashboard, with 20-point capacity.

Goal: four expense split methods, edit/delete own expenses, and the balance dashboard. Capacity: 20 points. Matching items: US-010 Split an expense by equal/exact/percentage/shares (8 pts, broken into US-010-T1 equal & exact calculation/validation, US-010-T2 percentage & shares calculation/validation, US-010-T3 split-method selector UI, US-010-T4 split calculation test suite), US-011 Edit or delete my own expense (5 pts), US-012 View group balance dashboard (5 pts) - totaling 18 of 20 points.

**Related:** US-010, US-010-T1, US-010-T2, US-010-T3, US-010-T4, US-011, US-012

- ⚠ Sprint assignment inferred from goal text, not an explicit item-to-sprint mapping in the input.
- ⚠ No execution status reported for this sprint.

### SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 covers settlement suggestions, manual settlement recording, and background new-expense notifications, with 20-point capacity.

Goal: settlement suggestions, manual settlement recording, and background new-expense notifications. Capacity: 20 points. Matching items: US-013 See simplified who-owes-whom settlement suggestions (5 pts), US-014 Record a manual repayment/settlement (5 pts), US-015 Notify members when a new expense is added (8 pts, broken into US-015-T1 Redis-backed background job dispatch, US-015-T2 email notification via SendGrid with failure handling, US-015-T3 in-app notification records on expense creation, US-015-T4 trigger notification job from expense creation flow) - totaling 18 of 20 points.

**Related:** US-013, US-014, US-015, US-015-T1, US-015-T2, US-015-T3, US-015-T4

- ⚠ Sprint assignment inferred from goal text, not an explicit item-to-sprint mapping in the input.
- ⚠ No execution status reported for this sprint.

### SPRINT-5 · approved · source: plan:Sprint 5

Sprint 5 covers scheduled payment reminders and the in-app notification inbox, with 20-point capacity.

Goal: scheduled payment reminders and the in-app notification inbox. Capacity: 20 points. Matching items: US-016 Send payment reminders to members who owe money (5 pts), US-017 View in-app notifications (3 pts) - totaling 8 of 20 points.

**Related:** US-016, US-017

- ⚠ Sprint assignment inferred from goal text, not an explicit item-to-sprint mapping in the input.
- ⚠ Assigned backlog totals only 8 of the 20-point capacity for this sprint; no rationale for the unused capacity was provided.
- ⚠ No execution status reported for this sprint.

### EPIC-001 · approved · source: plan:EPIC-001

Epic covering account registration and authentication: register, verify email, and log in/out.

EPIC-001 Account Registration & Authentication. No point estimate or role assigned at the epic level. Child stories: US-001 Register with email and password (5 pts, backend-agent), US-002 Verify email address (3 pts, backend-agent), US-003 Log in and log out (5 pts, backend-agent).

**Related:** US-001, US-002, US-003

- ⚠ Epic-level points and role are unspecified (None/unassigned) in the input.

### EPIC-002 · approved · source: plan:EPIC-002

Epic covering group creation, currency settings, invitations, and membership management.

EPIC-002 Groups & Membership. No point estimate or role assigned at the epic level. Child stories: US-004 Create a persistent group (3 pts, backend-agent), US-005 Set the group's default currency (2 pts, backend-agent), US-006 Invite members by email or shareable link (5 pts, backend-agent), US-007 Join a group via invitation (5 pts, backend-agent), US-008 Manage group members (3 pts, backend-agent).

**Related:** US-004, US-005, US-006, US-007, US-008

- ⚠ Epic-level points and role are unspecified (None/unassigned) in the input.

### EPIC-003 · approved · source: plan:EPIC-003

Epic covering expense logging, the four split methods, and editing/deleting one's own expenses.

EPIC-003 Expense Logging & Splitting. No point estimate or role assigned at the epic level. Child stories: US-009 Log an expense recording who paid (5 pts, backend-agent), US-010 Split an expense by equal shares, exact amounts, percentages, or shares/weights (8 pts, backend-agent) broken into US-010-T1 equal/exact split calculation & validation (backend-agent), US-010-T2 percentage/shares split calculation & validation (backend-agent), US-010-T3 split-method selector and input UI (frontend-agent), US-010-T4 split calculation test suite (qa-agent); and US-011 Edit or delete my own expense (5 pts, backend-agent).

**Related:** US-009, US-010, US-010-T1, US-010-T2, US-010-T3, US-010-T4, US-011

- ⚠ Epic-level points and role are unspecified (None/unassigned) in the input.

### EPIC-004 · approved · source: plan:EPIC-004

Epic covering the balance dashboard, settlement suggestions, and manual repayment recording.

EPIC-004 Balances, Settlement Suggestions & Repayments. No point estimate or role assigned at the epic level. Child stories: US-012 View group balance dashboard (5 pts, frontend-agent), US-013 See simplified who-owes-whom settlement suggestions (5 pts, backend-agent), US-014 Record a manual repayment/settlement (5 pts, backend-agent).

**Related:** US-012, US-013, US-014

- ⚠ Epic-level points and role are unspecified (None/unassigned) in the input.

### EPIC-005 · approved · source: plan:EPIC-005

Epic covering new-expense notifications, payment reminders, and the in-app notification inbox.

EPIC-005 Notifications & Reminders. No point estimate or role assigned at the epic level. Child stories: US-015 Notify members when a new expense is added (8 pts, integration-agent) broken into US-015-T1 Redis-backed background job dispatch (devops-agent), US-015-T2 email notification via SendGrid with failure handling (integration-agent), US-015-T3 in-app notification records on new expense creation (backend-agent), US-015-T4 trigger notification job from the expense creation flow (backend-agent); US-016 Send payment reminders to members who owe money (5 pts, integration-agent); US-017 View in-app notifications (3 pts, frontend-agent).

**Related:** US-015, US-015-T1, US-015-T2, US-015-T3, US-015-T4, US-016, US-017

- ⚠ Epic-level points and role are unspecified (None/unassigned) in the input.

### US-001 · approved · source: plan:US-001

Backlog item for registering an account with email and password.

US-001 Register with email and password. 5 points, assigned to backend-agent, part of EPIC-001 Account Registration & Authentication, scoped into Sprint 1 per the sprint goal (core authentication...).

**Related:** EPIC-001

- ⚠ No implementation or completion status reported for this ticket.

### US-002 · approved · source: plan:US-002

Backlog item for verifying a registered email address.

US-002 Verify email address. 3 points, assigned to backend-agent, part of EPIC-001 Account Registration & Authentication, scoped into Sprint 1.

**Related:** EPIC-001

- ⚠ No implementation or completion status reported for this ticket.

### US-003 · approved · source: plan:US-003

Backlog item for logging in and logging out.

US-003 Log in and log out. 5 points, assigned to backend-agent, part of EPIC-001 Account Registration & Authentication, scoped into Sprint 1.

**Related:** EPIC-001

- ⚠ No implementation or completion status reported for this ticket.

### US-004 · approved · source: plan:US-004

Backlog item for creating a persistent group.

US-004 Create a persistent group. 3 points, assigned to backend-agent, part of EPIC-002 Groups & Membership, scoped into Sprint 1.

**Related:** EPIC-002

- ⚠ No implementation or completion status reported for this ticket.

### US-005 · approved · source: plan:US-005

Backlog item for setting a group's default currency.

US-005 Set the group's default currency. 2 points, assigned to backend-agent, part of EPIC-002 Groups & Membership, scoped into Sprint 1.

**Related:** EPIC-002

- ⚠ No implementation or completion status reported for this ticket.

### US-006 · approved · source: plan:US-006

Backlog item for inviting members by email or shareable link.

US-006 Invite members by email or shareable link. 5 points, assigned to backend-agent, part of EPIC-002 Groups & Membership, scoped into Sprint 2 (group invitations, membership management, and basic expense logging).

**Related:** EPIC-002

- ⚠ No implementation or completion status reported for this ticket.

### US-007 · approved · source: plan:US-007

Backlog item for joining a group via invitation.

US-007 Join a group via invitation. 5 points, assigned to backend-agent, part of EPIC-002 Groups & Membership, scoped into Sprint 2.

**Related:** EPIC-002

- ⚠ No implementation or completion status reported for this ticket.

### US-008 · approved · source: plan:US-008

Backlog item for managing group members.

US-008 Manage group members. 3 points, assigned to backend-agent, part of EPIC-002 Groups & Membership, scoped into Sprint 2.

**Related:** EPIC-002

- ⚠ No implementation or completion status reported for this ticket.

### US-009 · approved · source: plan:US-009

Backlog item for logging an expense and recording who paid.

US-009 Log an expense recording who paid. 5 points, assigned to backend-agent, part of EPIC-003 Expense Logging & Splitting, scoped into Sprint 2.

**Related:** EPIC-003

- ⚠ No implementation or completion status reported for this ticket.

### US-010 · approved · source: plan:US-010

Backlog item for splitting an expense by equal shares, exact amounts, percentages, or shares/weights.

US-010 Split an expense by equal shares, exact amounts, percentages, or shares/weights. 8 points, assigned to backend-agent, part of EPIC-003 Expense Logging & Splitting, scoped into Sprint 3 (four expense split methods, edit/delete own expenses, and the balance dashboard). Broken into 4 tasks: US-010-T1 (equal/exact calculation & validation, backend-agent), US-010-T2 (percentage/shares calculation & validation, backend-agent), US-010-T3 (split-method selector and input UI, frontend-agent), US-010-T4 (split calculation test suite, qa-agent).

**Related:** EPIC-003, US-010-T1, US-010-T2, US-010-T3, US-010-T4

- ⚠ No implementation or completion status reported for this ticket or its sub-tasks.

### US-010-T1 · approved · source: plan:US-010-T1

Task to implement equal and exact split calculation and validation logic.

Implement equal and exact split calculation and validation, assigned to backend-agent, part of US-010. No point estimate given for this task.

**Related:** US-010

- ⚠ No point estimate or completion status provided for this task.

### US-010-T2 · approved · source: plan:US-010-T2

Task to implement percentage and shares/weights split calculation and validation logic.

Implement percentage and shares/weights split calculation and validation, assigned to backend-agent, part of US-010. No point estimate given for this task.

**Related:** US-010

- ⚠ No point estimate or completion status provided for this task.

### US-010-T3 · approved · source: plan:US-010-T3

Task to build the split-method selector and input UI.

Build split-method selector and input UI, assigned to frontend-agent, part of US-010. No point estimate given for this task.

**Related:** US-010

- ⚠ No point estimate or completion status provided for this task.

### US-010-T4 · approved · source: plan:US-010-T4

Task to add a test suite covering the split calculations.

Add split calculation test suite, assigned to qa-agent, part of US-010. No point estimate given for this task.

**Related:** US-010

- ⚠ No point estimate or completion status provided for this task.
- ⚠ No actual test results are available yet; this only records the planned test-suite task.

### US-011 · approved · source: plan:US-011

Backlog item for editing or deleting one's own expense.

US-011 Edit or delete my own expense. 5 points, assigned to backend-agent, part of EPIC-003 Expense Logging & Splitting, scoped into Sprint 3.

**Related:** EPIC-003

- ⚠ No implementation or completion status reported for this ticket.

### US-012 · approved · source: plan:US-012

Backlog item for viewing the group balance dashboard.

US-012 View group balance dashboard. 5 points, assigned to frontend-agent, part of EPIC-004 Balances, Settlement Suggestions & Repayments, scoped into Sprint 3.

**Related:** EPIC-004

- ⚠ No implementation or completion status reported for this ticket.

### US-013 · approved · source: plan:US-013

Backlog item for showing simplified who-owes-whom settlement suggestions.

US-013 See simplified who-owes-whom settlement suggestions. 5 points, assigned to backend-agent, part of EPIC-004 Balances, Settlement Suggestions & Repayments, scoped into Sprint 4 (settlement suggestions, manual settlement recording, and background new-expense notifications).

**Related:** EPIC-004

- ⚠ No implementation or completion status reported for this ticket.

### US-014 · approved · source: plan:US-014

Backlog item for recording a manual repayment or settlement.

US-014 Record a manual repayment/settlement. 5 points, assigned to backend-agent, part of EPIC-004 Balances, Settlement Suggestions & Repayments, scoped into Sprint 4.

**Related:** EPIC-004

- ⚠ No implementation or completion status reported for this ticket.

### US-015 · approved · source: plan:US-015

Backlog item for notifying members when a new expense is added.

US-015 Notify members when a new expense is added. 8 points, assigned to integration-agent, part of EPIC-005 Notifications & Reminders, scoped into Sprint 4. Broken into 4 tasks: US-015-T1 (Redis-backed background job dispatch, devops-agent), US-015-T2 (email notification via SendGrid with failure handling, integration-agent), US-015-T3 (in-app notification records on new expense creation, backend-agent), US-015-T4 (trigger notification job from the expense creation flow, backend-agent).

**Related:** EPIC-005, US-015-T1, US-015-T2, US-015-T3, US-015-T4

- ⚠ No implementation or completion status reported for this ticket or its sub-tasks.

### US-015-T1 · approved · source: plan:US-015-T1

Task to set up Redis-backed background job dispatch for notifications.

Set up Redis-backed background job dispatch for notifications, assigned to devops-agent, part of US-015. No point estimate given for this task.

**Related:** US-015

- ⚠ No point estimate or completion status provided for this task.

### US-015-T2 · approved · source: plan:US-015-T2

Task to implement email notification sending via SendGrid with failure handling.

Implement email notification sending via SendGrid with failure handling, assigned to integration-agent, part of US-015. No point estimate given for this task.

**Related:** US-015

- ⚠ No point estimate or completion status provided for this task.

### US-015-T3 · approved · source: plan:US-015-T3

Task to create in-app notification records on new expense creation.

Create in-app notification records on new expense creation, assigned to backend-agent, part of US-015. No point estimate given for this task.

**Related:** US-015

- ⚠ No point estimate or completion status provided for this task.

### US-015-T4 · approved · source: plan:US-015-T4

Task to trigger the notification job from the expense creation flow.

Trigger notification job from the expense creation flow, assigned to backend-agent, part of US-015. No point estimate given for this task.

**Related:** US-015

- ⚠ No point estimate or completion status provided for this task.

### US-016 · approved · source: plan:US-016

Backlog item for sending payment reminders to members who owe money.

US-016 Send payment reminders to members who owe money. 5 points, assigned to integration-agent, part of EPIC-005 Notifications & Reminders, scoped into Sprint 5 (scheduled payment reminders and the in-app notification inbox).

**Related:** EPIC-005

- ⚠ No implementation or completion status reported for this ticket.

### US-017 · approved · source: plan:US-017

Backlog item for viewing in-app notifications.

US-017 View in-app notifications. 3 points, assigned to frontend-agent, part of EPIC-005 Notifications & Reminders, scoped into Sprint 5.

**Related:** EPIC-005

- ⚠ No implementation or completion status reported for this ticket.
<!-- sdlc:auto:end narrative -->
