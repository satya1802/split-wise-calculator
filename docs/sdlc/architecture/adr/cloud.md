<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-10-28

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v2.

## Considered Options

- AWS
- Google Cloud
- Azure

## Decision Outcome

Chosen option: AWS, because Runs the API and worker on Fargate, managed PostgreSQL on RDS and Redis alongside, with encryption in transit and at rest for financial and credential data.

## Consequences

More managed services to wire together than a single PaaS, but gives headroom to scale from a handful of groups to many (NFR-010).
<!-- sdlc:auto:end adr -->