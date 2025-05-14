# 🗂️ Work Manager

**Work Manager** is a task management web application built with **React** and **Tailwind CSS**, featuring **OpenAI integration** to automate task title and description generation. It includes two separate dashboards for **Admins** and **Employees**, with full authentication and task assignment features.

---

## 🚀 Features

### ✅ General
- Built with **React** for dynamic UI
- Styled using **Tailwind CSS** for fast and responsive design
- Secure **email-based authentication** (Login/Logout)

### 🧠 AI-Powered Automation
- Uses **OpenAI API** to automatically generate task **titles** and **descriptions**, reducing manual input and improving efficiency

### 👨‍💼 Admin Dashboard
- Assign tasks to employees
- View and manage all tasks
- Tasks are auto-updated on assigned employee’s dashboard
- View all registered employee accounts

### 👨‍💻 Employee Dashboard
- View tasks assigned by admin
- Real-time updates of new assignments
- Organized task view based on status or priority

---

## 🔐 Authentication
- Multiple **email-based login** for Admin and Employees
- Session management for login/logout
- Role-based access control (Admin vs. Employee views)

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS
- **AI Integration:** OpenAI (GPT-based API)
- **Authentication:** Custom or Firebase/Auth0 (based on your implementation)
- **State Management:** React hooks/context or your preferred method

---

## 📸 Screenshots
> _Add screenshots of your dashboards here_

---

## 📂 Folder Structure (Optional)
```bash
/work-manager
├── src/
│   ├── components/
│   ├── pages/
│   ├── dashboards/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── utils/
├── public/
└── README.md
