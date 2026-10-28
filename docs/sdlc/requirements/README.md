# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-TECH-STACK · approved · source: requirements:technology-stack

Product owner approved a fixed technology stack: FastAPI backend, AWS cloud, PostgreSQL database, React frontend.

Backend: FastAPI 0.115 chosen for account/auth logic, edit permissions, balance recalculation and the debt-simplification algorithm. Cloud: AWS chosen to host app servers, managed PostgreSQL (RDS) and networking in one place, scaling from a few groups to many. Database: PostgreSQL 16 chosen for transactional consistency so balances never drift from underlying expenses. Frontend: React 19 chosen for the interactive, mobile-friendly, form-heavy UI covering four split methods and live balance updates. Stack is to be designed against exactly as specified, no substitutions.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005

### REQ-SERVICES · approved · source: requirements:services

Product owner approved two runtime services: SendGrid for transactional email and Redis as a background job queue.

Email: SendGrid (SaaS, env var SENDGRID_API_KEY) delivers account verification, group invites, and payment reminder emails. Queue: Redis (container redis:7-alpine, env var REDIS_URL) backs background/scheduled sending of reminders and new-expense notifications so the UI is never blocked. Required API keys: REDIS_URL, SENDGRID_API_KEY.

**Related:** US-015, US-016, NFR-006, NFR-007

### REQ-OUT-OF-SCOPE · approved · source: requirements:out-of-scope

Explicit exclusions from this delivery: receipt attachments, categories/reports, activity feed/comments, and native mobile apps.

Out of scope by product-owner decision: (1) receipt photo attachments, (2) expense categories and spending reports/charts, (3) an activity feed with comments, (4) native iOS/Android apps -- the product is a responsive web app only (see NFR-009).

**Related:** EPIC-003, NFR-009

### US-001 · draft · source: requirements:US-001 (EPIC-001)

A prospective user can register with email and password; the account starts unverified and a verification email is sent.

AC-001: valid email + password meeting minimum requirements creates an unverified account and sends a verification email. AC-002: registering with an email already in use is rejected with a message that it's taken. AC-003: invalid email or a password failing minimum requirements blocks account creation and shows a validation error explaining what to fix.

**Related:** EPIC-001, AC-001, AC-002, AC-003, NFR-001, NFR-002

- ⚠ The exact minimum password requirements (length/complexity rules) are referenced by NFR-002 but never defined in the input.

### US-002 · draft · source: requirements:US-002 (EPIC-001)

A newly registered user verifies their email via a link to activate the account before logging in.

AC-004: opening a valid verification link marks the account verified and allows login. AC-005: login attempts on an unverified account are blocked with a prompt to verify, plus an option to resend the verification email.

**Related:** EPIC-001, AC-004, AC-005, NFR-001

- ⚠ Verification link expiration/lifetime is not specified.

### US-003 · draft · source: requirements:US-003 (EPIC-001)

A verified user logs in with email/password to reach their groups dashboard, and can log out to end the session.

AC-006: correct credentials authenticate the user and route to the groups dashboard. AC-007: incorrect email or password shows an invalid-credentials error and no login occurs. AC-008: logging out ends the session, requiring re-login for further access.

**Related:** EPIC-001, AC-006, AC-007, AC-008, NFR-003

- ⚠ Session duration/timeout behavior is not specified.

### US-004 · draft · source: requirements:US-004 (EPIC-002)

A logged-in user creates a named, persistent group that they become the admin and first member of.

AC-009: creating a group with a name saves it persistently, records the creator as admin/first member, and lists it in the user's groups. AC-010: omitting a group name blocks creation and prompts for a name.

**Related:** EPIC-002, AC-009, AC-010

### US-005 · draft · source: requirements:US-005 (EPIC-002)

A group creator sets a single default currency for the group; all group amounts display in that one currency.

AC-011: if no currency is specified, the group uses the configurable system default (e.g. USD). AC-012: expenses, balances and settlements all display in that single currency -- no multi-currency or exchange-rate handling.

**Related:** EPIC-002, AC-011, AC-012

- ⚠ Single-currency-only is flagged in the input itself as 'assumption: single currency throughout' -- confirm this is a final decision, not open. List of currencies selectable as the configurable default is not specified.

### US-006 · draft · source: requirements:US-006 (EPIC-002)

A group admin invites people to the group either by emailing them a join link or generating a shareable invite link.

AC-013: inviting by email sends an invitation email with a join link. AC-014: a generated shareable invite link lets anyone who opens it join or request to join.

**Related:** EPIC-002, AC-013, AC-014

- ⚠ Input flags 'assumption: invite-link join flow, no SSO' as an open assumption needing confirmation. Invite link expiration/revocation lifecycle beyond 'revoked or invalid' is not detailed.

### US-007 · draft · source: requirements:US-007 (EPIC-002)

An invited person accepts an invite to become a group member, registering first if they lack an account.

AC-015: a logged-in, verified user who opens a valid invite becomes a member with access to expenses/balances. AC-016: a person without an account is guided through registration and verification before being added. AC-017: a revoked or invalid invite link is refused with a clear message and no membership granted.

**Related:** EPIC-002, AC-015, AC-016, AC-017, NFR-004

### US-008 · draft · source: requirements:US-008 (EPIC-002)

A group admin can view the member list and remove members; standard members cannot remove anyone.

AC-018: admin sees the full current member list. AC-019: admin removing a member revokes that member's access. AC-020: non-admin members cannot remove other members.

**Related:** EPIC-002, AC-018, AC-019, AC-020, NFR-004, NFR-005

- ⚠ Input flags 'admin holds standard member-management permissions' as an open assumption -- the full scope of admin permissions beyond removal (e.g. promoting another admin, renaming group) is not defined.

### US-009 · draft · source: requirements:US-009 (EPIC-003)

A group member logs an expense with description, amount, date, payer, and the members it involves.

AC-021: a valid expense (description, positive amount, payer, involved members) saves and contributes to group balances. AC-022: missing amount/payer or a non-positive amount is rejected with a validation error.

**Related:** EPIC-003, AC-021, AC-022

### US-010 · draft · source: requirements:US-010 (EPIC-003)

An expense can be split four ways: equal shares, exact amounts, percentages, or shares/weights.

AC-023: equal split divides the amount evenly among selected members; shares sum to the total. AC-024: exact-amount split is rejected if per-member amounts don't sum to the total. AC-025: percentage split is rejected if percentages don't total 100%. AC-026: shares/weights split divides the total proportionally to assigned weights; shares sum to the total.

**Related:** EPIC-003, AC-023, AC-024, AC-025, AC-026

### US-011 · draft · source: requirements:US-011 (EPIC-003)

A member can edit or delete their own expense, with group balances recalculated; non-admins can't touch others' expenses.

AC-027: editing an expense's details/split updates it and recalculates affected balances. AC-028: deleting an expense removes it and recalculates balances. AC-029: a non-admin member cannot edit or delete an expense created by someone else.

**Related:** EPIC-003, AC-027, AC-028, AC-029, NFR-005, NFR-008

- ⚠ The epic narrative states 'admins can also edit/remove expenses (open assumption)' but no acceptance criterion covers admin edit/delete of another member's expense -- needs an explicit AC or confirmation before design/build.

### US-012 · draft · source: requirements:US-012 (EPIC-004)

A group member views a dashboard of current net balances per member, always up to date with expenses/settlements.

AC-030: dashboard shows each member's net balance in the group currency, distinguishing positive from negative. AC-031: any add/edit/delete of an expense or settlement is reflected the next time the dashboard is viewed.

**Related:** EPIC-004, AC-030, AC-031, NFR-004, NFR-008

### US-013 · draft · source: requirements:US-013 (EPIC-004)

The app suggests a minimized set of payer-to-payee payments to settle all outstanding group balances.

AC-032: with outstanding non-zero balances, the app shows a simplified payer-to-payee amount set that settles everyone with a minimized number of transactions. AC-033: when all members are settled, the app indicates nothing to settle.

**Related:** EPIC-004, AC-032, AC-033

- ⚠ Input flags 'assumption: simplified debt per group' -- the specific debt-simplification algorithm to implement is not defined and will need to be specified at design time.

### US-014 · draft · source: requirements:US-014 (EPIC-004)

A member records a manual repayment (payer, payee, amount) to clear debt in-app; no real money moves.

AC-034: recording a settlement with payer, payee, positive amount marked paid reduces balances accordingly. AC-035: omitting payer, payee, or a positive amount blocks saving with a validation error. AC-036: the app makes clear settlements only track balance, not real fund transfer.

**Related:** EPIC-004, AC-034, AC-035, AC-036

### US-015 · draft · source: requirements:US-015 (EPIC-005)

Members affected by a new expense get both an in-app notification and an email, even if email delivery fails.

AC-037: a member included in a new expense gets an in-app notification and an email. AC-038: if the email service is unavailable or its API key is missing, the in-app notification still delivers and the expense still saves; the email failure doesn't block the save.

**Related:** EPIC-005, AC-037, AC-038, NFR-006, NFR-007

- ⚠ Input flags 'assumption: email via a transactional service such as SendGrid; no SMS or push' -- confirmed by approved services list, but retry/backoff policy for failed email sends is not specified.

### US-016 · draft · source: requirements:US-016 (EPIC-005)

The app sends email + in-app reminders to members who owe money; members with no debt get no reminder.

AC-039: a member with outstanding debt receives an email and in-app reminder stating what they owe and to whom. AC-040: a member with no outstanding debt receives no reminder.

**Related:** EPIC-005, AC-039, AC-040, NFR-007

- ⚠ Reminder trigger schedule/frequency (e.g. daily, weekly) is not specified anywhere in the input.

### US-017 · draft · source: requirements:US-017 (EPIC-005)

A logged-in member views their in-app notifications/reminders and can mark them as read.

AC-041: opening in-app notifications shows recent new-expense and payment-reminder messages. AC-042: marking a notification as read removes its unread status.

**Related:** EPIC-005, AC-041, AC-042

- ⚠ Notification history retention/length is not specified.

### NFR-001 · draft · source: requirements:NFR-001

Security: only verified accounts may sign in.

New accounts are created unverified and only activated via a valid email verification link. Login must be blocked for unverified accounts, with an option to resend the verification email.

**Related:** US-001, US-002

### NFR-002 · draft · source: requirements:NFR-002

Security: passwords must meet minimum requirements at registration.

Registration must reject passwords failing defined minimum requirements and explain what needs fixing.

**Related:** US-001

- ⚠ The actual minimum password requirements (length, character classes, etc.) are not defined in the input.

### NFR-003 · draft · source: requirements:NFR-003

Security: access to groups/balances requires an active authenticated session.

Only authenticated users can reach groups/balances; logout must end the session so re-login is required.

**Related:** US-003

### NFR-004 · draft · source: requirements:NFR-004

Privacy: group data (expenses, balances, settlements) is visible only to current group members.

A removed member must immediately lose access to that group's data.

**Related:** US-007, US-008, US-012

### NFR-005 · draft · source: requirements:NFR-005

Security: edit/delete and member-removal rights are restricted by ownership and admin role.

Members may edit/delete only their own expenses; admins may edit/remove any expense and manage (remove) members; standard members cannot remove members or edit others' expenses.

**Related:** US-008, US-011

### NFR-006 · draft · source: requirements:NFR-006

Availability: email outages must not block core expense-saving or in-app notification functionality.

If the email service or API key is unavailable, the expense must still save and the in-app notification still deliver; the email failure is handled gracefully.

**Related:** US-015

### NFR-007 · draft · source: requirements:NFR-007

Performance: notification/reminder emails are queued and sent in the background on a schedule.

Sending email must never slow down the person adding an expense; reminders run on a schedule via the background queue.

**Related:** US-015, US-016

### NFR-008 · draft · source: requirements:NFR-008

Availability/consistency: balances must always atomically match the expenses/settlements behind them.

Every add/edit/delete of an expense or settlement must recalculate all affected per-member balances as a single atomic change, so balances never drift from underlying records.

**Related:** US-011, US-012, US-014

### NFR-009 · draft · source: requirements:NFR-009

Compatibility: the app is a responsive, mobile-friendly web app working on phone and desktop browsers; no native app.

Applies to the whole system. No native iOS or Android app is provided.

### NFR-010 · draft · source: requirements:NFR-010

Scalability: the app must grow from a few groups/members to many without re-platforming.

Applies to the whole system; informed the choice of AWS + managed PostgreSQL in the approved tech stack.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-28

**Capabilities in scope:** Email and password account registration and login, Create and manage persistent expense groups, Log expenses recording who paid, Split an expense by equal shares, exact amounts, percentages, or shares/weights, Running per-member balances within each group, Simplified "who owes whom" settlement suggestions, Record manual repayments and settlements to clear debts, Edit and delete your own expenses with balances recalculated, Group balance dashboard for a member, Single configurable default currency (e.g. USD), Manual settlement recording with no real money movement and no payment provider

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The core of this app is server logic: verifying accounts, enforcing who can edit which expense, recomputing balances on every change, and running the debt-simplification algorithm that minimizes payments. FastAPI is a clean Python framework for exactly this kind of calculation-and-rules API, and Python makes the settlement math straightforward to write and test. |
| cloud | AWS | A responsive web app with a database and scheduled email reminders needs reliable, always-on hosting, and AWS covers the whole stack — app servers, managed PostgreSQL (RDS), and the networking — in one place, so you can grow from a handful of groups to many without re-platforming. |
| database | PostgreSQL | Expenses, members, splits, balances and settlements are highly relational and must stay exactly consistent — a balance can never drift from the expenses behind it. PostgreSQL's transactions guarantee that when an expense is edited or deleted, every affected balance recalculates together or not at all, which is essential when money owed is at stake. |
| frontend | React | Your product is an interactive, mobile-friendly web app where members build expenses with four different split methods (equal, exact, percentage, shares) and watch balances and 'who owes whom' update live. React handles these dynamic, form-heavy screens well and makes the single codebase render cleanly on phones and desktops without a native app. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Account Registration & Authentication

Email/password account creation with email verification, and secure login. Auth is email/password with email verification and an invite-link join flow; no SSO (open assumption). No free/paid tiers or billing — the app is free to use.

### US-001: Register with email and password

**Priority:** critical

> As a prospective user, I want to create an account with my email address and a password, so that I can start tracking shared expenses.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the registration page and no account exists for my email | I submit a valid email address and a password meeting the minimum requirements | my account is created in an unverified state and a verification email is sent to my address |
| AC-002 | an account already exists for the email I enter | I submit the registration form | registration is rejected and I am told the email is already in use |
| AC-003 | I enter an invalid email or a password that fails the minimum requirements | I submit the registration form | the account is not created and I see a validation error explaining what to fix |

### US-002: Verify email address

**Priority:** high

> As a newly registered user, I want to confirm my email address via a verification link, so that my account is activated and I can log in.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I have received a verification email containing a valid link | I open the verification link | my account is marked as verified and I can log in |
| AC-005 | my account is still unverified | I attempt to log in | login is blocked and I am prompted to verify my email, with an option to resend the verification email |

### US-003: Log in and log out

**Priority:** critical

> As a registered, verified user, I want to log in with my email and password and log out when done, so that only I can access my groups and balances.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | I have a verified account | I submit my correct email and password | I am authenticated and taken to my groups dashboard |
| AC-007 | I enter an incorrect email or password | I submit the login form | I am not logged in and I see an error that the credentials are invalid |
| AC-008 | I am logged in | I choose to log out | my session is ended and I must log in again to access the app |

## EPIC-002: Groups & Membership

Registered users create persistent groups (trips, households) and invite others to join by email or shareable link; invited people become members. The group creator/admin can manage members (open assumption: standard member-management permissions). Each group has a single configurable default currency (e.g. USD).

### US-004: Create a persistent group

**Priority:** critical

> As a registered user, I want to create a named group for tracking shared expenses, so that my trip or household's expenses live together and persist over time.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | I am logged in | I create a group with a name | the group is saved persistently, I am recorded as its creator/admin and its first member, and it appears in my list of groups |
| AC-010 | I am creating a group | I do not provide a group name | the group is not created and I am prompted to enter a name |

### US-005: Set the group's default currency

**Priority:** medium

> As a group creator, I want to choose the single currency used for the group, defaulting to a configurable default (e.g. USD), so that all amounts in the group are consistent.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I am creating or editing a group | I do not specify a currency | the group uses the configurable system default currency (e.g. USD) |
| AC-012 | a group has a currency set | members view expenses, balances and settlements | all amounts are displayed in that single currency with no multi-currency or exchange-rate handling (assumption: single currency throughout) |

### US-006: Invite members by email or shareable link

**Priority:** critical

> As a group creator or admin, I want to invite people to my group by email or by a shareable invite link, so that they can join and participate in tracking expenses.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | I am an admin of a group | I invite a person by entering their email address | an invitation email is sent to that address with a link to join the group |
| AC-014 | I am an admin of a group | I generate a shareable invite link | the app produces a link that lets anyone who opens it request to join or join the group (assumption: invite-link join flow, no SSO) |

### US-007: Join a group via invitation

**Priority:** critical

> As a invited person, I want to accept an invitation and become a member of the group, so that I can log my own expenses and view balances.

| ID | Given | When | Then |
|---|---|---|---|
| AC-015 | I open a valid invite link or email invitation and am logged in to a verified account | I accept the invitation | I am added as a member of the group and can access its expenses and balances |
| AC-016 | I open a valid invite link but do not yet have an account | I follow the join flow | I am guided to register and verify my email before being added as a member |
| AC-017 | an invite link has been revoked or is invalid | I open it | I am not added to the group and I am told the invitation is no longer valid |

### US-008: Manage group members

**Priority:** medium

> As a group creator or admin, I want to view the member list and remove members, so that I can keep the group's membership accurate.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | I am an admin of a group | I open the group's member list | I see all current members of the group |
| AC-019 | I am an admin of a group | I remove a member | that member can no longer access the group (assumption: admin holds standard member-management permissions) |
| AC-020 | I am a standard (non-admin) member | I view the group | I cannot remove other members |

## EPIC-003: Expense Logging & Splitting

Members log expenses recording who paid and how the amount is split among selected members, using any of four methods: equal shares, exact amounts, percentages, or shares/weights. Members can edit and delete their own expenses with balances recalculated; admins can also edit/remove expenses (open assumption). Excludes receipt photos and expense categories.

### US-009: Log an expense recording who paid

**Priority:** critical

> As a group member, I want to add an expense with a description, amount, date and the member who paid, so that the group has an accurate record of shared spending.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I am a member of a group | I add an expense with a description, a positive amount, a payer and the members it involves | the expense is saved to the group and contributes to the group's balances |
| AC-022 | I am adding an expense | I leave out the amount or the payer, or enter a non-positive amount | the expense is not saved and I see a validation error |

### US-010: Split an expense by equal shares, exact amounts, percentages, or shares/weights

**Priority:** critical

> As a group member logging an expense, I want to choose how the expense is split among selected members by equal shares, exact amounts, percentages, or shares/weights, so that each person's share reflects reality.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | I am splitting an expense equally among selected members | I save it | the amount is divided evenly among the selected members and the per-member shares sum to the total |
| AC-024 | I am splitting by exact amounts | the entered per-member amounts do not sum to the expense total | the expense is not saved and I am told the amounts must add up to the total |
| AC-025 | I am splitting by percentages | the entered percentages do not sum to 100% | the expense is not saved and I am told the percentages must total 100% |
| AC-026 | I am splitting by shares/weights | I assign each selected member a weight and save | the total is divided in proportion to the weights and the per-member shares sum to the total |

### US-011: Edit or delete my own expense

**Priority:** high

> As a group member who created an expense, I want to edit or delete an expense I logged, so that I can correct mistakes and keep balances accurate.

| ID | Given | When | Then |
|---|---|---|---|
| AC-027 | I created an expense in a group | I edit its details or split | the expense is updated and the group's per-member balances are recalculated accordingly |
| AC-028 | I created an expense in a group | I delete it | the expense is removed and the group's per-member balances are recalculated accordingly |
| AC-029 | an expense was created by another member and I am not an admin | I view it | I cannot edit or delete it (assumption: members edit/delete their own expenses; admins may edit/remove any) |

## EPIC-004: Balances, Settlement Suggestions & Repayments

The app maintains running per-member balances within each group, shows a balance dashboard, computes simplified who-owes-whom suggestions to minimize the number of transactions, and lets members record manual repayments/settlements. Settlements are recorded manually (mark as paid); the app tracks balances but moves no real money and integrates no payment provider (open assumption).

### US-012: View group balance dashboard

**Priority:** critical

> As a group member, I want to see a dashboard of running per-member balances in the group, so that I know who is owed and who owes within the group.

| ID | Given | When | Then |
|---|---|---|---|
| AC-030 | a group has expenses and settlements recorded | I open the group's balance dashboard | I see each member's current net balance in the group's currency, with positive and negative balances distinguished |
| AC-031 | an expense or settlement is added, edited or deleted | I next view the dashboard | the per-member balances reflect the change |

### US-013: See simplified who-owes-whom settlement suggestions

**Priority:** high

> As a group member, I want the app to suggest who should pay whom to settle up with the fewest transactions, so that we can clear debts with minimal payments.

| ID | Given | When | Then |
|---|---|---|---|
| AC-032 | a group has outstanding non-zero balances | I view the settlement suggestions | the app shows a simplified set of payer-to-payee amounts that settles all balances using a minimized number of transactions (assumption: simplified debt per group) |
| AC-033 | all members in a group are settled up | I view the settlement suggestions | the app indicates there is nothing to settle |

### US-014: Record a manual repayment/settlement

**Priority:** critical

> As a group member, I want to record a repayment I made or received as a settlement, so that the debt is cleared in the app even though money changed hands offline.

| ID | Given | When | Then |
|---|---|---|---|
| AC-034 | I owe or am owed money in a group | I record a settlement specifying payer, payee and amount and mark it as paid | the settlement is saved and the group's per-member balances are reduced accordingly (assumption: manual recording, no real money movement, no payment provider) |
| AC-035 | I am recording a settlement | I omit the payer, payee or a positive amount | the settlement is not saved and I see a validation error |
| AC-036 | a settlement has been recorded | I view the group | the app makes clear it only tracks the balance and does not transfer real funds |

## EPIC-005: Notifications & Reminders

The app sends payment reminders/notifications via email and in-app when a member owes money or when a new expense is added. Reminders use a transactional email service (e.g. SendGrid) requiring an API key; no SMS or push (open assumption).

### US-015: Notify members when a new expense is added

**Priority:** high

> As a group member, I want to be notified by email and in-app when a new expense affecting me is added, so that I stay aware of changes to what I owe.

| ID | Given | When | Then |
|---|---|---|---|
| AC-037 | I am a member included in a newly added expense | the expense is saved | I receive an in-app notification and an email about the new expense (assumption: email via a transactional service such as SendGrid; no SMS or push) |
| AC-038 | the transactional email service is unavailable or its API key is missing | a notification should be sent | the in-app notification is still delivered and the email failure is handled without blocking the expense from being saved |

### US-016: Send payment reminders to members who owe money

**Priority:** medium

> As a group member who is owed money, I want the app to send reminders to members who owe money, so that outstanding debts are more likely to be settled.

| ID | Given | When | Then |
|---|---|---|---|
| AC-039 | a member has an outstanding amount owed in a group | a payment reminder is triggered | that member receives an email and an in-app reminder stating what they owe and to whom (assumption: email plus in-app only, no SMS or push) |
| AC-040 | a member has no outstanding debt in a group | reminders are evaluated | no payment reminder is sent to that member |

### US-017: View in-app notifications

**Priority:** medium

> As a logged-in member, I want to see my in-app notifications and reminders, so that I can review expense and payment activity without relying on email.

| ID | Given | When | Then |
|---|---|---|---|
| AC-041 | I have received notifications | I open my in-app notifications | I see my recent new-expense and payment-reminder notifications |
| AC-042 | I have viewed a notification | I mark it as read | it is no longer shown as unread |
<!-- sdlc:auto:end epics -->
