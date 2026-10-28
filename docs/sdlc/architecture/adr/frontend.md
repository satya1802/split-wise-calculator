<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v2.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Drives the form-heavy expense builder with four split methods and live-updating balance dashboard from a single responsive codebase that renders on phone and desktop (NFR-009).

## Consequences

SPA needs client-side routing and state handling, added via libraries below rather than a meta-framework.
<!-- sdlc:auto:end adr -->