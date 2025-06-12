# 📝 To-Do App

A powerful and responsive To-Do application built with **React**, **TypeScript**, and a **Node.js + MongoDB** backend. Manage your tasks efficiently with real-time CRUD features and an intuitive UI.

---

## 🚀 Live Demo

🔗 [Click here to view the app](https://to-do-app-6d4e6.web.app)

---

## 🛠 Tech Stack

### Frontend:
- ⚛️ React 19 + TypeScript
- 💅 Material UI (MUI)
- 🎨 Bootstrap 5
- 🌐 React Router DOM v7
- 📦 Axios, Formik, Yup, Day.js, Moment.js

### Backend:
- 🔧 Node.js with Express
- 🗄️ MongoDB
- 🔁 CORS for API communication

### Deployment:
- ☁️ Firebase Hosting (Frontend)

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- 📆 Date pickers with MUI
- 🔁 API integration with Express + MongoDB
- 📱 Fully responsive and clean UI

---

## 📁 Project Structure
root/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── App.tsx
│ └── index.tsx
├── server/
│ └── rest-api.js
├── package.json
└── README.md


---

## 📦 Getting Started (Frontend)

```bash
git clone https://github.com/arpitdurge37/To-Do-App.git
cd To-Do-App
npm install
npm start

🌐 Starting the Backend (API Server)
cd server
npm install
node rest-api.js
