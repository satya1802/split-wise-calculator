<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v2.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Transactions keep balances exactly consistent with the expenses and settlements behind them (NFR-008), and its relational model fits groups, members, splits and settlements naturally.

## Consequences

Balances are derived on read for correctness; if read volume grows, a materialized per-member balance cache can be added later.
<!-- sdlc:auto:end adr -->