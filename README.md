# 🍔 DevEats — Food Delivery Platform 

DevEats is a modern, responsive food delivery web application built using **React + Vite**.  
The project focuses on performance, clean UI/UX, accessibility, and scalable architecture, simulating a real-world food delivery platform.

---

## 🚀 Live Features

- 🧾 Dynamic food menu powered by a public REST API
- 🛒 Cart system with localStorage persistence
- 🔍 Veg / Non-Veg filtering
- ⚡ Fast performance with Vite
- 🎨 Modern UI with animations and gradients
- ♿ Accessibility-first components (ARIA, keyboard support)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 Central layout system (Header + Footer)
- 📜 Legal pages (Privacy, Terms, FAQ)
- 📊 Animated About page with scroll-based timeline
- 🌐 Multi-language brand animation (Indian + foreign scripts)

---

## 🧱 Tech Stack

- **Frontend:** React 18
- **Bundler:** Vite
- **Styling:** Plain CSS (no Tailwind)
- **Routing:** React Router DOM
- **State Management:** React Hooks
- **API:** Public Food Menu API
- **Storage:** localStorage
- **Linting:** ESLint
- **Accessibility:** ARIA roles & reduced-motion support

---

## 📁 Project Structure
# Project File Structure

This document describes the complete folder and file structure of the **Food Delivery App**, including both **Backend (Node.js + Sequelize)** and **Frontend (React + Vite)**.

---

## Root Directory

```
FOOD-DELIVERY-APP/
│
├── Backend/
├── node_modules/
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

## Backend Structure (`Backend/`)

```
Backend/
│
├── config/
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
├── migrations/
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
│
├── seeders/
│
├── .env
├── package.json
├── package-lock.json
├── server.js
├── Structure.md
├── test-sequelize.js
```

---

## Frontend Structure (`src/`)

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
│   └── Layouts/
│       ├── PageLoader.jsx
│       └── ScrollToTop.jsx
│
├── pages/
│   ├── About/
│   │   ├── About.jsx
│   │   └── AboutWrapper.jsx
│   │
│   ├── Brands/
│   │   └── Brand.jsx
│   │
│   ├── Cart/
│   │   ├── Cart_Page.jsx
│   │   └── Cart.jsx
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── ContactWrapper.jsx
│   │
│   ├── FAQ/
│   │   ├── FAQ.jsx
│   │   └── FAQWrapper.jsx
│   │
│   ├── Home/
│   │   ├── App_Download.jsx
│   │   ├── Hero.jsx
│   │   ├── Home_About.jsx
│   │   ├── Home_menu.jsx
│   │   ├── Home_Promo.jsx
│   │   ├── Home.jsx
│   │   └── Parallax.jsx
│   │
│   ├── Menu/
│   │   └── Menu.jsx
│   │
│   ├── NotFound/
│   │   ├── NotFound.jsx
│   │   └── NotFoundWrapper.jsx
│   │
│   ├── privacy/
│   │   ├── privacy.jsx
│   │   └── privacyWrapper.jsx
│   │
│   ├── terms/
│   │   ├── terms.jsx
│   │   └── termsWrapper.jsx
│   │
│   └── ThankYou/
│       ├── ThankYou.jsx
│       └── ThankYouWrapper.jsx
│
├── Services/
│   └── menuService.js
│
├── styles/
│   └── App.css
│
├── App.jsx
├── main.jsx
```

---

## Summary

- **Backend** follows a clean MVC structure with controllers, middleware, Sequelize models, migrations, and seeders.
- **Frontend** is built with **React + Vite**, using:
  - `pages/` for route-level views
  - `components/Layouts/` for shared UI logic
  - `assets/` organized by feature/section
  - `Services/` for API/service abstraction
- The project is **deployment-ready** with `vercel.json`.

## 🔗 API Used

Food menu data is fetched from:



https://free-food-menus-api-two.vercel.app/burgers


API responses are transformed on the frontend to match UI requirements.

---

## 🌱 Environment Setup (Vite)

Create a `.env` file in the project root:



VITE_BASE_URL=https://free-food-menus-api-two.vercel.app


> Only variables prefixed with `VITE_` are exposed to the client.

---

## 🛠️ Installation & Run



git clone <your-repo-url>
cd yomato
npm install
npm run dev


The application will run at:



http://localhost:5173


---

## 🧪 Linting



npm run lint


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
- Clear separation of concerns  
- Reusable layouts and components  
- Performance-first rendering  
- Readable, maintainable code  

---

## 📌 Future Improvements

- User authentication  
- Order history  
- Payment gateway integration  
- Admin dashboard  
- Backend with Node.js & Express  
- Database integration  

---

## 📄 License

This project is created for learning and demonstration purposes only.  
All brand names and APIs belong to their respective owners.

---

**Built with focus, discipline, and real-world engineering practices.**
