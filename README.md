# 🌸 Esraa Mahmoud — Frontend Developer Portfolio

<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Material_UI-e91e8c?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/EmailJS-FF6B35?style=for-the-badge" />
<img src="https://img.shields.io/badge/Lottie-Animations-00DDB3?style=for-the-badge" />
<img src="https://img.shields.io/badge/Plus_Jakarta_Sans-Font-e91e8c?style=for-the-badge" />

<br/><br/>

### A modern, fully responsive personal portfolio built with React and Material UI — featuring dark/light mode, smooth hover effects, Lottie animations, and a real projects showcase.

<br/>

</div>

---

## 🔗 Live Demo

[https://esraa-portfolio.vercel.app](https://esraa-portfolio.vercel.app)

---

## 📖 Introduction

This is my personal frontend developer portfolio. It showcases my skills, education, and real projects — all in a clean, responsive, and visually polished single-page application.

The entire site was built from scratch using React and Material UI. No templates were used. Every section, layout, animation, and design decision was crafted manually.

---

## ✨ Sections

### 🏠 Home
- Animated **typewriter effect** — each letter of "Frontend Developer" appears one by one
- **Esraa Mahmoud** name displayed with pink gradient
- Social links: **GitHub**, **LinkedIn**, **Gmail**
- **Lottie animation** on the right side

### 👩‍💻 About
- Brief professional introduction
- Lottie animation alongside the text
- Clean card with hover glow effect

### 🎓 Education & Courses
- **MTI University** — Bachelor of Computer Science and AI
- **ITI** — Summer Code Camp, ReactJS
- **Route Academy** — Frontend Diploma & Computer Science Diploma
- 2-column responsive grid with icon badges

### 🛠️ Skills
- 12 skills displayed as clickable cards — each links to its official documentation
- Icons loaded from **devicons CDN**
- Skills: React.js, JavaScript, Bootstrap, Tailwind CSS, Material UI, Redux Toolkit, TypeScript, CSS3, HTML5, Git & GitHub, C++, Python

### 🗂️ Projects
- **8 real projects** with screenshots, descriptions, tech stack chips, and GitHub links
- 3-column responsive grid
- **"View More"** button links to GitHub repositories tab

### 📬 Contact
- 3 large contact cards: **Gmail**, **LinkedIn**, **GitHub**
- Each card is fully clickable and links directly
- Lottie animation on the left

---

## 🚀 Tech Stack

### ⚛️ React + Vite
React is the core UI framework. The app is built as a single-page application with reusable components for each section. Vite handles the dev server and production build.

### 🎨 Material UI (MUI)
MUI provides the component system — `Box`, `Container`, `Paper`, `Typography`, `Button`, `IconButton`, `Chip`, `TextField`. All components are fully customized via the `sx` prop and a custom theme with pink as the primary color.

### 🌙 Dark / Light Mode
A full theme toggle built with React `createContext` and MUI `createTheme`. The mode persists across the session and switches all colors, backgrounds, and shadows instantly.

### 🎞️ Lottie — @lottiefiles/dotlottie-react
Three `.lottie` animations bring the UI to life — one each for the Home, About, and Contact sections. Loaded from `public/assets/`.

### 📧 EmailJS
Contact form integration ready — fill in your Service ID, Template ID, and Public Key to activate email sending directly to your Gmail inbox.

### 🔤 Plus Jakarta Sans
Google Font loaded via `index.html`. Applied globally across all components for a clean, modern typographic feel.

---

## 📁 Project Structure

```
Portfolio-Website/
├── public/
│   └── assets/
│       ├── home.lottie
│       ├── about.lottie
│       ├── contact.lottie
│       ├── ShopNest.png
│       ├── CRUD.png
│       ├── Elite.png
│       ├── Women.png
│       ├── weather.png
│       ├── Calculator.png
│       ├── soso.png
│       └── word.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### Installation

```bash
git clone https://github.com/esraamhmd/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License — see the LICENSE file for details.

---

<div align="center">

**Built with ❤️ using React + Material UI**

</div>
