# Authorization-Based TODO Application
---

## ⚙️ Setup Steps

### 1. Clone the repository

git clone <your-repo-link>  
cd <project-folder>

### 2. Install dependencies

npm install

### 3. Create `.env` file using `.env.example`

Fill your Supabase credentials and JWT secret.

### 4. Setup Database in Supabase

Run the following SQL in Supabase SQL Editor:

#### Users Table

create table public.users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  password text not null,
  created_at timestamp default now()
);

#### Todos Table

create table public.todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  completed boolean default false,
  "userId" uuid references public.users(id) on delete cascade,
  created_at timestamp default now()
);

### 5. Run the server

npm run dev

Server runs at: http://localhost:5000


## API Endpoints

### Signup
POST /signup

Body:
{
  "name": "User",
  "email": "user@mail.com",
  "password": "123456"
}

---

### Login
POST /login

Body:
{
  "email": "user@mail.com",
  "password": "123456"
}

Response:
{
  "token": "JWT_TOKEN"
}

---

### Create Todo (Protected)
POST /todos

Header:
Authorization: Bearer <token>

Body:
{
  "title": "Learn JWT"
}

---

### Get Todos (Protected)
GET /todos

Header:
Authorization: Bearer <token>

---

### Update Todo (Protected)
PUT /todos/:id

Header:
Authorization: Bearer <token>

Body:
{
  "title": "Updated",
  "completed": true
}

---

### Delete Todo (Protected)
DELETE /todos/:id

Header:
Authorization: Bearer <token>


### env.example

PORT=5000
SUPABASE_URL=
SUPABASE_KEY=
JWT_SECRET=
