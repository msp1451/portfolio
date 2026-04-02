# Personal Portfolio Website - Manish Patel

A clean, modern, and highly performant personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It features a multi-page architecture with dedicated sections for an introduction, skills, experience, education, projects, achievements, competitive programming, blog, and a functional contact form.

---

## 🚀 Live Demo

[**View Portfolio**](https://msp1451.github.io/portfolio/)

---

## ✨ Features

- **Modern & Responsive UI:** Clean, minimalist design that looks great on all devices.
- **Multi-Page Architecture:** Smooth client-side routing between all sections using React Router (HashRouter).
- **Robust Animations:**
  - Seamless page transitions powered by Framer Motion.
  - Reliable "staggered entrance" animations for content on each page.
- **Dark/Light Mode:** A beautiful, persistent theme toggle with system preference detection.
- **Component-Based:** Built with reusable, memoized components for performance and easy maintenance.
- **Contact Form Integration:** A functional contact form powered by Formspree.
- **Performance-Optimized:** Fast load times thanks to Vite, React.memo, and lazy-loading best practices.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router](https://reactrouter.com/) (HashRouter)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/msp1451/portfolio.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
   Your site will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Build for Production

```sh
npm run build
```

The output will be in the `dist/` directory.

---

## 📂 File Structure

```
src/
├── assets/              # Static assets (images, photos)
├── components/
│   ├── About.jsx        # Introduction & profile section
│   ├── Academics.jsx    # Education details
│   ├── Achievements.jsx # Awards & accomplishments
│   ├── Blog.jsx         # Blog posts
│   ├── Contact.jsx      # Contact form (Formspree)
│   ├── CP.jsx           # Competitive programming
│   ├── Experience.jsx   # Work experience
│   ├── Footer.jsx       # Site footer with social links
│   ├── Header.jsx       # Navigation header with theme toggle
│   ├── Layout.jsx       # Page layout wrapper
│   ├── Projects.jsx     # Project showcase
│   ├── ScrollToTop.jsx  # Scroll restoration on route change
│   ├── SideNav.jsx      # Mobile side navigation
│   ├── Skills.jsx       # Technical skills
│   └── ui/              # Shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       └── textarea.jsx
├── lib/                 # Utility functions
├── App.jsx              # Main app with routing & theme logic
├── App.css
├── index.css            # Global styles & Tailwind config
└── main.jsx             # Entry point
```

---

## 🚀 Deployment

This project is automatically deployed to GitHub Pages via a GitHub Actions workflow on every push to `master`. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for details.

---

## ✒️ Author

**Manish Patel**

- GitHub: [@msp1451](https://github.com/msp1451)
- LinkedIn: [msp1451](https://www.linkedin.com/in/msp1451/)
- Email: [patel1451@gmail.com](mailto:patel1451@gmail.com)
