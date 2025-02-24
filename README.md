# Task Management API

## 📌 Overview

The **Task Management API** is a RESTful API built with **Node.js, Express, and MySQL** that allows users to manage tasks efficiently. It follows **OOP principles and design patterns** for clean and scalable architecture.

---

## 📂 Folder Structure

```
task-management-api
│── node_modules/
│── src/
│   ├── controllers/
│   │   ├── taskController.js
│   ├── models/
│   │   ├── BaseModel.js
│   │   ├── taskModel.js
│   ├── routes/
│   │   ├── taskRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── app.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### **1️⃣ Prerequisites**

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MySQL](https://www.mysql.com/)

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
```

### **3️⃣ Install Dependencies**

```sh
npm install
```

### **4️⃣ Configure Environment Variables**

Create a **.env** file in the root directory and add your database credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=task_management
PORT=5000
```

### **5️⃣ Setup the Database**

Run the following SQL queries in MySQL to create the **tasks** table:

```sql
CREATE DATABASE task_management;
USE task_management;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('TO_DO', 'IN_PROGRESS', 'DONE') NOT NULL DEFAULT 'TO_DO',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **6️⃣ Start the Server**

```sh
npm run dev  # Starts with nodemon (for development)
# or
npm start    # Starts normally
```

> The server should be running at `http://localhost:5000`

---

## 🚀 API Endpoints

### **📌 Task Endpoints**

| Method     | Endpoint         | Description         |
| ---------- | ---------------- | ------------------- |
| **GET**    | `/api/tasks`     | Get all tasks       |
| **GET**    | `/api/tasks/:id` | Get a task by ID    |
| **POST**   | `/api/tasks`     | Create a new task   |
| **PUT**    | `/api/tasks/:id` | Update a task by ID |
| **DELETE** | `/api/tasks/:id` | Delete a task by ID |

### **📌 Request & Response Examples**

#### **1️⃣ Create a Task**

**Request:** `POST /api/tasks`

```json
{
  "title": "Build dashboard",
  "description": "Design and implement the dashboard page",
  "status": "TO_DO"
}
```

**Response:**

```json
{
  "message": "Task created successfully",
  "task": {
    "id": 1,
    "title": "Build dashboard",
    "description": "Design and implement the dashboard page",
    "status": "TO_DO",
    "createdAt": "2025-02-24T12:00:00.000Z"
  }
}
```

#### **2️⃣ Get All Tasks**

**Request:** `GET /api/tasks`
**Response:**

```json
[
  {
    "id": 1,
    "title": "Build dashboard",
    "description": "Design and implement the dashboard page",
    "status": "TO_DO",
    "createdAt": "2025-02-24T12:00:00.000Z"
  }
]
```

#### **3️⃣ Update a Task**

**Request:** `PUT /api/tasks/1`

```json
{
  "title": "Update Dashboard",
  "description": "Improve UI/UX",
  "status": "IN_PROGRESS"
}
```

**Response:**

```json
{
  "message": "Task updated successfully"
}
```

#### **4️⃣ Delete a Task**

**Request:** `DELETE /api/tasks/1`
**Response:**

```json
{
  "message": "Task deleted successfully"
}
```

---

## 🔒 Assumptions & Security Measures

- **CORS Enabled** (`app.js` includes `app.use(cors())`).
- **Input Validation** (Uses `express-validator` for required fields).
- **Error Handling** (Catches database and server errors gracefully).
- **Prevent SQL Injection** (Uses parameterized queries in `db.js`).

---

## 💡 Future Improvements

- Implement **JWT authentication** for user management.
- Add **pagination** for task listings.
- Implement **Unit Tests** with Jest/Mocha.

---

## 👨‍💻 Author

Wimukthi Manchanayaka(https://github.com/Wimukthi-Manchanayaka) 🚀

