# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| React SPA | Static web app (S3 + CloudFront) | React 19 build | CDN edge | dev |
| FastAPI API | App server (ECS Fargate) | FastAPI 0.115 on Python 3.12 | horizontal (add tasks) | dev |
| Background Worker | Worker task (ECS Fargate) | Python worker (Celery) | horizontal (add workers) | dev |
| PostgreSQL | Amazon RDS for PostgreSQL 16 | PostgreSQL 16 | vertical + read replica when needed | dev |
| Redis | Redis queue (ECS container or ElastiCache) | redis:7-alpine | single node (dev) | dev |
| SendGrid | SendGrid transactional email | SaaS | managed | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
_Not deployed yet._
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_React_SPA["React SPA<br/>Static web app (S3 + CloudFront)"]
  n_FastAPI_API["FastAPI API<br/>App server (ECS Fargate)"]
  n_Background_Worker["Background Worker<br/>Worker task (ECS Fargate)"]
  n_PostgreSQL["PostgreSQL<br/>Amazon RDS for PostgreSQL 16"]
  n_Redis["Redis<br/>Redis queue (ECS container or ElastiCache)"]
  n_SendGrid["SendGrid<br/>SendGrid transactional email"]
  n_React_SPA -->|"HTTPS"| n_FastAPI_API
  n_FastAPI_API -->|"TLS/5432"| n_PostgreSQL
  n_FastAPI_API -->|"TCP/6379"| n_Redis
  n_Background_Worker -->|"TCP/6379"| n_Redis
  n_Background_Worker -->|"TLS/5432"| n_PostgreSQL
  n_Background_Worker -->|"HTTPS"| n_SendGrid
```
<!-- sdlc:auto:end topology -->
