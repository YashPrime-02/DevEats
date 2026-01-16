# 🍔 YOMATO — Food Delivery Platform (Frontend)

YOMATO is a modern, responsive food delivery web application built using **React + Vite**.  
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

1) Root LEVEL

FOOD-DELIVERY-APP/
│
├── .vite/                    # Vite internal cache (auto-generated)
├── dist/                     # Production build output (after `npm run build`)
├── node_modules/             # Installed dependencies
│
├── public/                   # Static assets (favicon, images if any)
│
├── src/                      # Application source code (MAIN WORK AREA)
│
├── .env                      # Environment variables (API keys, base URLs)
├── .gitattributes
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html                # Root HTML template (Vite entry)
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
├── vercel.json                # Deployment config (Vercel)
└── vite.config.js             # Vite configuration


2) src/ – Core Application Structure

src/
│
├── assets/                   # Images, icons, fonts (used in components/pages)
│
├── components/               # Reusable global UI components
│   ├── Layouts/
│   │   └── Layouts.jsx       # App shell (Header + Footer + Outlet)
│   │
│   ├── Header/
│   ├── Footer/
│   ├── PageLoader.jsx        # Suspense fallback loader
│   ├── ScrollToTop.jsx       # Scroll reset on route change
│   
│
├── pages/                    # Route-level pages (1 folder = 1 route)
│
├── Services/                 # API / data abstraction layer
│   └── menuService.js
│
├── styles/                   # Global + page-specific CSS
│
├── App.jsx                   # Router + lazy loading setup
└── main.jsx                  # ReactDOM entry point

3) pages structure

pages/
└── PageName/
    ├── PageName.jsx          # Actual page UI
    └── PageNameWrapper.jsx   # Wrapper (Layout, SEO, guards if needed)

3.1) HOME PAGE

pages/Home/
│
├── Home.jsx                  # Assembles home sections
├── Hero.jsx
├── Home_About.jsx
├── Home_menu.jsx
├── Home_Promo.jsx
├── Parallax.jsx
└── App_Download.jsx

<Layout>
  <Hero />
  <Home_about />
  <Home_Promo />
  <Parallax />
  <App_Download />
  <Brand />
</Layout>


3.2) Menu Page
pages/Menu/
└── Menu.jsx

<Layout>
  <Home_menu />
  <Brand />
</Layout>

3.3) Cart Page

pages/Cart/
├── Cart.jsx                  # Cart UI logic
└── Cart_Page.jsx             # Route-level container

3.4) About Page
pages/About/
├── About.jsx
└── AboutWrapper.jsx

3.5) Brands
pages/Brands/
└── Brand.jsx

3.6) Contact

pages/Contact/
├── Contact.jsx
└── ContactWrapper.jsx

3.7) FAQ Page

pages/FAQ/
├── FAQ.jsx
└── FAQWrapper.jsx

3.8) Legal Pages

pages/privacy/
├── privacy.jsx
└── privacyWrapper.jsx

pages/terms/
├── terms.jsx
└── termsWrapper.jsx


3.9) Thank you and not found page
pages/ThankYou/
├── ThankYou.jsx
└── ThankYouWrapper.jsx

pages/NotFound/
├── NotFound.jsx
└── NotFoundWrapper.jsx

4) Services
Services/
└── menuService.js

5) Routing
main.jsx
  ↓
App.jsx
  ↓
BrowserRouter
  ↓
Suspense(PageLoader)
  ↓
Routes
  ↓
PageWrapper
  ↓
Layout
  ↓
Page Sections / Components


---

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
