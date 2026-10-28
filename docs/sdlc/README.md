# split wise calculator — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
split wise calculator

**Documentation version:** v2
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 18 entries |
| [Development](development/README.md) | 0 entries |
| [Testing](testing/README.md) | 0 entries |
| [Deployment](deployment/README.md) | 0 entries |
| [Maintenance](maintenance/README.md) | 0 entries |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | not generated yet |
| [API reference](development/api-reference.md) | 0 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 17 requirements |
| [Changelog](CHANGELOG.md) | 2 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- The exact minimum password requirements (length/complexity rules) are referenced by NFR-002 but never defined in the input.
- Verification link expiration/lifetime is not specified.
- Session duration/timeout behavior is not specified.
- Single-currency-only is flagged in the input itself as 'assumption: single currency throughout' -- confirm this is a final decision, not open. List of currencies selectable as the configurable default is not specified.
- Input flags 'assumption: invite-link join flow, no SSO' as an open assumption needing confirmation. Invite link expiration/revocation lifecycle beyond 'revoked or invalid' is not detailed.
- Input flags 'admin holds standard member-management permissions' as an open assumption -- the full scope of admin permissions beyond removal (e.g. promoting another admin, renaming group) is not defined.
- The epic narrative states 'admins can also edit/remove expenses (open assumption)' but no acceptance criterion covers admin edit/delete of another member's expense -- needs an explicit AC or confirmation before design/build.
- Input flags 'assumption: simplified debt per group' -- the specific debt-simplification algorithm to implement is not defined and will need to be specified at design time.
- Input flags 'assumption: email via a transactional service such as SendGrid; no SMS or push' -- confirmed by approved services list, but retry/backoff policy for failed email sends is not specified.
- Reminder trigger schedule/frequency (e.g. daily, weekly) is not specified anywhere in the input.
- Notification history retention/length is not specified.
- The actual minimum password requirements (length, character classes, etc.) are not defined in the input.

### Architecture

- Input does not map individual requirement ids (US-001..US-017) to specific architecture elements, so most architecture entries below are traceable to the architecture spec itself but not to specific user stories -- recommend requirements-to-architecture mapping be confirmed by a human reviewer.
- No requirement id in the known list is explicitly linked to this path in the input.
- No specific requirement id cited in the input for this decision.
<!-- sdlc:auto:end open-gaps -->
