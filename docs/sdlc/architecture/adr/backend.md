<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v2.

## Considered Options

- FastAPI 0.115
- Django REST Framework
- Flask

## Decision Outcome

Chosen option: FastAPI 0.115, because Hosts the auth, membership/ownership rules, atomic balance recalculation and debt-simplification algorithm as a clean, well-typed Python API that is easy to unit-test.

## Consequences

Minimal framework means auth, background jobs and email are assembled from focused libraries, which this design lists explicitly.
<!-- sdlc:auto:end adr -->