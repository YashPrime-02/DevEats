# 🍔 DevEats — Full Stack Food Delivery Platform

DevEats is a modern, responsive **full-stack food delivery web application** built with:

- **Frontend:** React + Vite (deployed on **Vercel**)
- **Backend:** Node.js + Express (deployed on **Render**)
- **Database:** PostgreSQL (hosted on **Supabase**)

The project focuses on real-world architecture, clean UI/UX, accessibility, and scalable features like **JWT authentication, DB-based cart, order placement, order history, and admin order management**.

---

## 🌐 Live Modules

### 👤 User Features
- 🔐 JWT Authentication (Register / Login)
- 🧾 Dynamic food menu powered by a public REST API
- 🛒 **User-based cart stored in PostgreSQL** (not shared across users)
- ➕ Add to cart / remove from cart
- 🧾 Checkout → Places order in DB
- 📜 Order History
- 📦 Order Detail (items + totals + images)
- 🎨 Modern UI with animations and gradients
- ♿ Accessibility-first components (ARIA, keyboard support)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 Central layout system (Header + Footer)
- 📜 Legal pages (Privacy, Terms, FAQ, Disclaimer)
- 📊 Animated About page with scroll-based timeline
- 🌐 Brand animation (multi-language scripts)

### 🛡️ Admin Features
- 👥 View users
- 📦 View all orders
- 💰 Revenue stats
- 🧾 Admin order management page (frontend)
- 📊 View All Contact Form Responses

---

## 🧱 Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Plain CSS (no Tailwind)
- ESLint
- Lighthouse testing (Performance + Accessibility)

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt password hashing
- Middleware: auth guard, admin guard, error handler, request logger

### Database (Supabase)
- PostgreSQL schema for:
  - users
  - carts
  - cart_items
  - orders
  - order_items

---

## 🔗 Public Menu API Used

Food menu data is fetched from:

```
https://free-food-menus-api-two.vercel.app/burgers
```

API responses are transformed on the frontend to match UI requirements.

---

## 📁 Project Structure (Frontend + Backend)

### Root Directory

```
FOOD-DELIVERY-APP/
│
├── Backend/
├── public/
├── src/
│
├── .env
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
├── vite.config.js
```

---

## 🧩 Backend Structure (`Backend/`)

```
Backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   ├── cartController.js
│   └── orderController.js
│
├── middleware/
│   ├── adminMiddleware.js
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── logger.js
│
├── models/
│   ├── adminLog.js
│   ├── cart.js
│   ├── cartItem.js
│   ├── contact.js
│   ├── index.js
│   ├── order.js
│   ├── orderItem.js
│   └── user.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
├── Structure.md
└── test-sequelize.js
```

---

## 🎨 Frontend Structure (`src/`)

```
src/
│
├── assets/
│   ├── about/
│   ├── blog/
│   ├── brands/
│   ├── cart/
│   ├── footer/
│   ├── hero/
│   ├── logo/
│   ├── menu/
│   ├── parallax/
│   ├── promotion/
│   ├── shop/
│   ├── Food_Content.txt
│   └── react.svg
│
├── components/
│   ├── Guards/
│   │   ├── AuthGuard.jsx
│   │   └── AdminGuard.jsx
│   │
│   ├── Layouts/
│   │   ├── PageLoader.jsx
│   │   └── ScrollToTop.jsx
│   │
│   └── PageLoader.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── pages/
│   ├── About/
│   ├── Admin/
│   ├── Auth/
│   ├── Brands/
│   ├── Cart/
│   ├── Contact/
│   ├── Disclaimer/
│   ├── FAQ/
│   ├── Home/
│   ├── Menu/
│   ├── NotFound/
│   ├── Orders/
│   │   ├── OrderHistory.jsx
│   │   └── OrderDetail.jsx
│   ├── privacy/
│   ├── terms/
│   └── ThankYou/
│
├── Services/
│   ├── authService.js
│   ├── cartService.js
│   ├── menuService.js
│   └── orderService.js
│
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Cart.css
│   ├── Orders.css
│   └── (other page styles)
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Environment Setup

### ✅ Frontend `.env` (Vercel + Local)

Create a `.env` file in the **project root**:

```env
VITE_BASE_URL=https://free-food-menus-api-two.vercel.app
VITE_API_URL=http://localhost:3000
```

For production on Vercel:

```env
VITE_BASE_URL=https://free-food-menus-api-two.vercel.app
VITE_API_URL=https://your-render-backend-url.onrender.com
```

---

### ✅ Backend `.env` (Render + Local)

Create a `.env` file inside `Backend/`:

```env
PORT=3000
NODE_ENV=development

DATABASE_URL=postgresql://postgres:password@localhost:5432/deveats_db

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

For production (Render + Supabase):

```env
PORT=3000
NODE_ENV=production

DATABASE_URL=postgresql://postgres:YOUR_PASS@db.xxxxx.supabase.co:5432/postgres

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

> Supabase requires SSL. In production, your backend `Pool()` should enable SSL.

---

## 🛠️ Installation & Run (Local)

### 1) Clone repo
```bash
git clone <your-repo-url>
cd FOOD-DELIVERY-APP
```

### 2) Install frontend dependencies
```bash
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

### 3) Run backend
```bash
cd Backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:3000
```

---

## 🔌 API Routes Summary

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Cart (User Based)
- `GET /api/cart`
- `POST /api/cart/add`
- `DELETE /api/cart/:id`

### Orders (User Based)
- `POST /api/order/place`
- `GET /api/order`
- `GET /api/order/:id`

### Admin (Protected)
- `GET /api/admin/users`
- `GET /api/admin/orders`
- `GET /api/admin/revenue`

---

## 🚀 Deployment (Production)

Correct deployment order:

### 1) Supabase (PostgreSQL)
- Create DB
- Import schema
- Add cart partial unique index:
  ```sql
  CREATE UNIQUE INDEX one_active_cart_per_user
  ON carts(user_id)
  WHERE status = 'active';
  ```

### 2) Render (Backend)
- Deploy Node/Express
- Add `DATABASE_URL`, `JWT_SECRET`, `NODE_ENV=production`
- Enable CORS for Vercel domain

### 3) Vercel (Frontend)
- Add env:
  - `VITE_API_URL=<render-backend-url>`
  - `VITE_BASE_URL=<menu-api-url>`

---

## ♿ Accessibility

- Semantic HTML structure  
- Keyboard navigable UI  
- `aria-label`, `aria-live`, `aria-current` usage  
- Focus-visible outlines  
- Reduced motion support via `prefers-reduced-motion`

---

## 🎯 Design Philosophy

- Real-world scalable structure  
- Clean separation of concerns  
- Reusable layouts and components  
- Performance-first rendering  
- Readable, maintainable code  

---

## 📌 Future Improvements
- Payment gateway integration
- Address management
- Real restaurant catalog
- Coupons and discounts
- Delivery tracking system
- OTP / email verification

---

## 📄 License

This project is created for learning and demonstration purposes only.  
All brand names and APIs belong to their respective owners.
