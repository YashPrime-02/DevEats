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

src/
├── assets/
├── components/
│ ├── Header/
│ ├── Footer/
│ └── Layouts/
├── pages/
│ ├── Home/
│ ├── Menu/
│ ├── Cart/
│ ├── About/
│ ├── Contact/
│ ├── Privacy/
│ ├── Terms/
│ └── FAQ/
├── Services/
│ └── menuService.js
├── styles/
├── App.jsx
└── main.jsx


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