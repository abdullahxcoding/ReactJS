# ReactJS

A set of React practice projects, each one built to learn a different part of the
React ecosystem: component composition, routing, the Context API, and global state
kept in sync with `localStorage`.

Every project is a standalone [Vite](https://vite.dev) app using **React 19** and
**Tailwind CSS 4**.

## Projects

### [`clothing_store/`](clothing_store) — multi-page e-commerce storefront

The largest project here. A clothing store with client-side routing, a persistent
cart, and a mock authentication flow.

- Routes for home, products, cart, login, and signup (`react-router-dom`)
- Products loaded from a public products API with `axios`
- `CartProvider` — add to cart, remove, change quantity, clear; the cart is saved
  to `localStorage` so it survives a refresh
- `UserProvider` — register, login, and logout against credentials in
  `localStorage` (a learning stand-in, not real authentication)
- Reusable UI: navbar, hero, category browser, featured products, product cards,
  horizontal carousel, shipping cards, and footers
- Icons from `lucide-react`

### [`project_03/`](project_03) — employee task management dashboard

A role-based task tracker with two different dashboards behind one login.

- Login resolves to either an **admin** or an **employee** view
- Admins create and assign tasks; employees accept, complete, or fail them
- Tasks are grouped by state: new, active, completed, and failed
- `AuthProvider` holds the seeded employee and admin data via Context
- The logged-in session persists in `localStorage`

### [`todos_context_api/`](todos_context_api) — todo app with the Context API

The smallest project, focused on one idea: sharing state without prop drilling.

- Add, edit, delete, and toggle todos
- All todo actions exposed through a single todo context
- Inline editing on each todo tile

## Running a project

Each project is installed and run on its own:

```bash
cd clothing_store
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Available in every project: `npm run dev`, `npm run build`, `npm run preview`,
and `npm run lint`.
