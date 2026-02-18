# 📚 Books REST API

A simple REST API built using **Node.js** and **Express.js** to manage a list of books.  
This project demonstrates basic CRUD operations without using a database (data stored in memory).

---

## 🚀 Features

- Get all books
- Add a new book
- Update existing book
- Delete a book
- JSON-based API responses

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Postman (for API testing)

---

## 📂 Project Structure

books-api/
│
├── server.js
├── package.json
├── package-lock.json
└── node_modules/


---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-link>
cd books-api # Navigate to project folder
npm install # Install dependencies
node server.js  # Start the server
http://localhost:3000  # Server will run on

API Endpoints
GET all books - GET /books
POST add new book - POST /books
PUT update book - PUT /books/:id
DELETE delete book - DELETE /books/:id

Body (JSON):
{
  "title": "Clean Code",
  "author": "Robert Martin"
}

PUT update book - PUT /books/:id
{
  "title": "Updated Book Title"
}

Testing
All endpoints were tested using Postman.


🎯 Learning Outcomes

Understanding REST API concepts
CRUD operations using Express.js
Handling JSON request and response
API testing with Postman

