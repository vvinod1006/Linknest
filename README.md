# 🔗 LinkNest – Personal Knowledge & Bookmark Organizer

> **Save it. Organize it. Find it. Your knowledge, all in one place.**

LinkNest is a React-based personal bookmark and knowledge management application that helps users save, organize, and manage useful websites, tutorials, articles, and learning resources in one centralized platform.

Instead of losing valuable resources among countless browser bookmarks, LinkNest allows users to organize their favorite links into custom collections, add tags, maintain reading lists, and track their learning progress through an intuitive dashboard.

---

## 📌 Project Overview

LinkNest provides a centralized space for managing digital resources efficiently.

Users can create an account, save useful websites, organize bookmarks into collections, mark important resources as favorites, and track their reading progress.

The application follows a component-based architecture using React, Context API for shared state management, Axios for API communication, and JSON Server as a mock REST API backend.

## ✨ Key Features

### 🔐 Authentication
- User Registration and Login.
- Form validation and error handling.
- Session persistence using Local Storage.
- Protected application routes.
- Logout functionality.

### 🔖 Bookmark Management
- Add, view, edit, and delete bookmarks.
- Store website URLs, titles, descriptions, and categories.
- Organize bookmarks using custom tags.
- Open saved resources directly through external links.
- View individual bookmark details.

### 📁 Collection Management
- Create custom collections.
- Organize bookmarks into collections.
- Edit collection details.
- Delete collections.
- View bookmarks belonging to a particular collection.

### ❤️ Favorites
- Mark bookmarks as favorites.
- Remove bookmarks from favorites.
- View all favorite resources in a dedicated page.

### 📚 Reading List
- Maintain a list of saved resources.
- Track reading status:
  - Unread
  - Reading
  - Completed
- View completed resources separately.

### 🔍 Search, Filter & Sort
- Search bookmarks by title and description.
- Filter resources by category and tags.
- Filter resources based on reading status.
- Sort bookmarks for easier navigation.

### 📊 Dashboard
- View bookmark statistics.
- Track favorite resources.
- Monitor reading progress.
- View recently added bookmarks.
- Get an overview of collections and saved resources.

### 🎨 User Interface
- Responsive dashboard layout.
- Reusable React components.
- Responsive sidebar and navigation bar.
- Tailwind CSS-based styling.
- Loading indicators and empty states.
- Success and error notifications.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| JavaScript (ES6+) | Application logic and functionality |
| Context API | Global state management |
| React Hooks | Managing component state and lifecycle |
| React Router DOM | Client-side routing and navigation |
| Axios | HTTP requests and API integration |
| Tailwind CSS | Responsive UI styling |
| JSON Server | Mock REST API backend |
| Local Storage | Maintaining demo user session |
| Vite | Frontend development and build tool |

### 📦 Major React Concepts Implemented

- Functional Components
- Component Reusability
- Props and State
- Context API (`createContext`, `useContext`)
- React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`)
- Controlled Components
- Conditional Rendering
- List Rendering using `map()`
- Array Methods (`filter()`, `map()`, `sort()`)
- Dynamic Routing
- Protected Routes
- Form Handling and Validation
- Asynchronous Programming (`async/await`)
- REST API Integration
- Responsive Design

---

## 📂 Project Structure

```text
LinkNest/
│
├── linknest-frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── bookmarks/
│   │   │   ├── collections/
│   │   │   └── common/
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookmarkContext.jsx
│   │   │   └── CollectionContext.jsx
│   │   │
│   │   ├── pages/
│   │   │
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── linknest-backend/
│   ├── db.json
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run LinkNest locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd LinkNest
```

### 2. Setup the Backend

Navigate to the backend directory:

```bash
cd linknest-backend
```

Install dependencies:

```bash
npm install
```

Start the JSON Server:

```bash
npm start
```

The backend will run at:

```text
http://localhost:5000
```

### 3. Setup the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd linknest-frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

**Note:** Both frontend and backend servers must be running simultaneously for the application to work correctly.

---

## 🔄 Application Workflow

The application follows this general workflow:

```text
        User
         |
         v
   Login / SignUp
         |
         v
   Authentication
         |
         v
   Protected Routes
         |
         v
      Dashboard
         |
         v
   Bookmark Management
         |
    +----+-----+
    |          |
    v          v
Collections  Favorites
    |          |
    v          v
Reading List  Saved Links
         |
         v
   React Context API
         |
         v
       Axios
         |
         v
    JSON Server
         |
         v
       db.json
```

### State Management

LinkNest uses three separate Context providers:

- **AuthContext:** Manages user session, login, signup, and logout.
- **BookmarkContext:** Manages bookmarks, favorites, reading status, and bookmark CRUD operations.
- **CollectionContext:** Manages collections and their associated operations.

This separation helps maintain a clean
