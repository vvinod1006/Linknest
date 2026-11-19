# LinkNest — React Bookmark & Knowledge Organizer

A portfolio-ready React application inspired by the structure of the supplied Course Management project. It uses React, JavaScript, Context API, hooks, Axios, React Router, Tailwind CSS, and JSON Server.

## Requirements
- Node.js 20.19+ or 22.12+ recommended (use a current LTS release compatible with your installed Vite version).
- npm.

## Run the backend
Open terminal 1:
```bash
cd linknest-backend
npm install
npm start
```
JSON Server runs at `http://localhost:5000`. Check `http://localhost:5000/bookmarks`.

## Run the frontend
Open terminal 2:
```bash
cd linknest-frontend
npm install
npm run dev
```
Open the local URL printed by Vite.

## Demo login
- Email: `demo@linknest.dev`
- Password: `LinkNest123!`

You can also create a new account from the Sign Up page.

## Features
- Login and sign-up screens, protected application routes, and logout.
- Dashboard with bookmark totals, favorites, in-progress resources, and completion progress.
- Bookmark CRUD, dynamic detail routes, favorite toggle, reading status, tags, categories, and search/filter/sort.
- Collections CRUD, collection detail pages, and related bookmark counts.
- Favorites, reading list, and completed resources.
- Responsive Tailwind CSS layout, loading/error/empty states, and toast notifications.

## Important demo security note
This project uses JSON Server as a mock backend. Passwords are stored as plain text and the frontend performs demo-only login checks. There is no secure server-side authentication or authorization. Do not use real passwords or deploy this as a production authentication system. For a real app, authentication and password hashing must be handled securely on a server.

## Troubleshooting
- If the app says it cannot reach the API, make sure the backend terminal is still running on port 5000.
- If port 5000 is occupied, stop the other process or change the backend port and update `VITE_API_URL` in a `.env` file.
- If Vite fails after extracting, run `npm install` inside `linknest-frontend`.
- Do not copy `node_modules` between unrelated projects; install dependencies in each folder.

## Folder map
- `src/context`: shared authentication, bookmark, and collection state.
- `src/services/api.js`: reusable Axios instance.
- `src/components`: reusable UI and layout components.
- `src/pages`: route-level screens.
- `linknest-backend/db.json`: demo database for JSON Server.
