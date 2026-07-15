# DecodeLabs Task Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D18-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)](https://expressjs.com/)

A modern, full-stack task manager built for the **DecodeLabs Full Stack Internship — Project 1**.

Track tasks across columns, persist data in SQLite, and ship a polished React UI with real-time updates, drag-and-drop, and dark mode.

---

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/Nooru-dotcom/decodeLabs_Project1.git
cd decodeLabs_Project1

# 2. Install dependencies
npm install

# 3. Start frontend + backend together
npm run dev
```

| Service  | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5000 |
| API base | http://localhost:5000/api |

<details>
<summary><strong>First-time setup checklist</strong></summary>

- [ ] Node.js 18+ installed (`node -v`)
- [ ] Dependencies installed (`npm install`)
- [ ] Optional `.env` created (see [Environment variables](#environment-variables))
- [ ] Dev servers running (`npm run dev`)
- [ ] API responds at `GET http://localhost:5000/api/tasks`

</details>

---

## Features

| Area | What you get |
|------|--------------|
| **Frontend** | Vite + React, drag-and-drop board, dark mode, responsive layout |
| **Backend** | Express REST API, SQLite persistence, JWT auth scaffold |
| **Dev UX** | Concurrent dev scripts, Vite proxy to `/api`, hot reload |

<details>
<summary><strong>Planned enhancements</strong></summary>

- [ ] React UI components (`src/`)
- [ ] Real-time updates via Socket.IO
- [ ] User registration flow wired to frontend
- [ ] Kanban columns: To Do → In Progress → Done
- [ ] Production build served from Express

</details>

---

## Project structure

```
decodeLabs_Project1/
├── backend/
│   ├── db.js              # SQLite connection + schema
│   ├── server.js          # Express app entry point
│   └── routes/
│       ├── auth.js        # Register / login (JWT)
│       └── tasks.js       # CRUD for tasks
├── index.html             # Vite HTML shell
├── vite.config.js         # Dev server + API proxy
├── package.json
└── README.md
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite (5173) and Express (5000) together |
| `npm run dev:client` | Frontend only |
| `npm run dev:server` | Backend only |
| `npm run build` | Build React app to `dist/` |
| `npm test` | Run frontend + backend tests |

---

## API reference

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | List all tasks (ordered by position) |
| `POST` | `/api/tasks` | Create a task |
| `PUT` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

<details>
<summary><strong>Example: create a task</strong></summary>

```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Ship README","description":"Write docs","status":"todo","position":0}'
```

</details>

### Auth (scaffold)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Create account `{ email, password }` |
| `POST` | `/api/auth/login` | Sign in and receive JWT |

---

## Environment variables

Create a `.env` file in the project root:

```env
PORT=5000
JWT_SECRET=change-me-in-production
```

<details>
<summary><strong>Production notes</strong></summary>

- Set a strong `JWT_SECRET` before deploying.
- Run `npm run build` so Express can serve the `dist/` folder.
- The SQLite database file is created at `backend/tasks.db`.

</details>

---

## Tech stack

**Frontend:** React 18 · Vite · React Router · React Beautiful DnD · Socket.IO Client

**Backend:** Express · SQLite3 · JWT · bcryptjs · CORS

**Tooling:** Concurrently · Jest · Supertest

---

## Troubleshooting

<details>
<summary><strong>Port already in use</strong></summary>

Change `PORT` in `.env` for the backend, or edit the `server.port` in `vite.config.js` for the frontend.

</details>

<details>
<summary><strong>API calls fail from the browser</strong></summary>

Make sure both servers are running via `npm run dev`. Vite proxies `/api` requests to `http://localhost:5000`.

</details>

<details>
<summary><strong>Why does GitHub show a different author name?</strong></summary>

Git uses the **name and email configured on your machine** when you commit. To show as your GitHub account, use:

```bash
git commit --author="nooru-dotcom <nooru-dotcom@users.noreply.github.com>"
```

Or set your GitHub noreply email in GitHub → Settings → Emails.

</details>

---

## License

MIT — see [LICENSE](LICENSE).

---

<p align="center">
  Built by <a href="https://github.com/Nooru-dotcom">@Nooru-dotcom</a> · DecodeLabs Full Stack Internship
</p>
