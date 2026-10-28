# Data Model

<!-- sdlc:auto:start entities -->
### users

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| email | citext | False | — | False |
| password_hash | text | False | — | False |
| is_verified | boolean | False | — | False |
| created_at | timestamptz | False | — | False |

### email_verifications

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| token | text | False | — | False |
| expires_at | timestamptz | False | — | False |
| used_at | timestamptz | False | — | True |

### groups

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| name | text | False | — | False |
| default_currency | varchar(3) | False | — | False |
| creator_id | uuid | False | users.id | False |
| created_at | timestamptz | False | — | False |

### group_members

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| group_id | uuid | False | groups.id | False |
| user_id | uuid | False | users.id | False |
| role | varchar(16) | False | — | False |
| joined_at | timestamptz | False | — | False |

### invitations

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| group_id | uuid | False | groups.id | False |
| email | citext | False | — | True |
| token | text | False | — | False |
| status | varchar(16) | False | — | False |
| created_by | uuid | False | users.id | False |
| expires_at | timestamptz | False | — | True |
| created_at | timestamptz | False | — | False |

### expenses

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| group_id | uuid | False | groups.id | False |
| description | text | False | — | False |
| amount | numeric(12,2) | False | — | False |
| expense_date | date | False | — | False |
| payer_id | uuid | False | users.id | False |
| created_by | uuid | False | users.id | False |
| split_method | varchar(16) | False | — | False |
| created_at | timestamptz | False | — | False |

### expense_splits

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| expense_id | uuid | False | expenses.id | False |
| user_id | uuid | False | users.id | False |
| share_amount | numeric(12,2) | False | — | False |

### settlements

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| group_id | uuid | False | groups.id | False |
| payer_id | uuid | False | users.id | False |
| payee_id | uuid | False | users.id | False |
| amount | numeric(12,2) | False | — | False |
| created_by | uuid | False | users.id | False |
| paid_at | timestamptz | False | — | False |

### notifications

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| group_id | uuid | False | groups.id | True |
| type | varchar(32) | False | — | False |
| message | text | False | — | False |
| is_read | boolean | False | — | False |
| created_at | timestamptz | False | — | False |
<!-- sdlc:auto:end entities -->

<!-- sdlc:auto:start relationships -->
| Source | Target | Type |
|---|---|---|
| users | email_verifications | one-to-many |
| users | groups | one-to-many |
| groups | group_members | one-to-many |
| users | group_members | one-to-many |
| groups | invitations | one-to-many |
| groups | expenses | one-to-many |
| expenses | expense_splits | one-to-many |
| users | expense_splits | one-to-many |
| groups | settlements | one-to-many |
| users | notifications | one-to-many |
<!-- sdlc:auto:end relationships -->

<!-- sdlc:auto:start er-diagram -->
```mermaid
erDiagram
  users {
    uuid id PK
    citext email
    text password_hash
    boolean is_verified
    timestamptz created_at
  }
  email_verifications {
    uuid id PK
    uuid user_id FK
    text token
    timestamptz expires_at
    timestamptz used_at
  }
  groups {
    uuid id PK
    text name
    varchar_3_ default_currency
    uuid creator_id FK
    timestamptz created_at
  }
  group_members {
    uuid id PK
    uuid group_id FK
    uuid user_id FK
    varchar_16_ role
    timestamptz joined_at
  }
  invitations {
    uuid id PK
    uuid group_id FK
    citext email
    text token
    varchar_16_ status
    uuid created_by FK
    timestamptz expires_at
    timestamptz created_at
  }
  expenses {
    uuid id PK
    uuid group_id FK
    text description
    numeric_12_2_ amount
    date expense_date
    uuid payer_id FK
    uuid created_by FK
    varchar_16_ split_method
    timestamptz created_at
  }
  expense_splits {
    uuid id PK
    uuid expense_id FK
    uuid user_id FK
    numeric_12_2_ share_amount
  }
  settlements {
    uuid id PK
    uuid group_id FK
    uuid payer_id FK
    uuid payee_id FK
    numeric_12_2_ amount
    uuid created_by FK
    timestamptz paid_at
  }
  notifications {
    uuid id PK
    uuid user_id FK
    uuid group_id FK
    varchar_32_ type
    text message
    boolean is_read
    timestamptz created_at
  }
  users ||--o{ email_verifications : "one-to-many"
  users ||--o{ groups : "one-to-many"
  groups ||--o{ group_members : "one-to-many"
  users ||--o{ group_members : "one-to-many"
  groups ||--o{ invitations : "one-to-many"
  groups ||--o{ expenses : "one-to-many"
  expenses ||--o{ expense_splits : "one-to-many"
  users ||--o{ expense_splits : "one-to-many"
  groups ||--o{ settlements : "one-to-many"
  users ||--o{ notifications : "one-to-many"
```
<!-- sdlc:auto:end er-diagram -->
