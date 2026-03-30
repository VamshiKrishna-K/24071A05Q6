# 📚 Student API (Express.js)

## 🚀 Setup

Run the following commands:

```bash
npm init -y
npm install express
```

---

## 🛠️ Create Server

Create a file named `server.js` and implement your Express server.

---

## ▶️ Run the Server

```bash
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints (Test using Postman)

### 1️⃣ Get All Students

* **Method:** GET
* **URL:**

```
http://localhost:3000/students
```

---

### 2️⃣ Get Single Student

* **Method:** GET
* **URL:**

```
http://localhost:3000/students/1
```

---

### 3️⃣ Create New Student

* **Method:** POST
* **URL:**

```
http://localhost:3000/students
```

* **Body (JSON):**

```json
{
  "name": "Alice Bob",
  "age": 21,
  "grade": "A+"
}
```

---

### 4️⃣ Update Student

* **Method:** PUT
* **URL:**

```
http://localhost:3000/students/1
```

* **Body (JSON):**

```json
{
  "grade": "A+"
}
```

---

### 5️⃣ Delete Student

* **Method:** DELETE
* **URL:**

```
http://localhost:3000/students/1
```

---

## 🧪 Testing

Use tools like **Postman** to test all endpoints.

---

## 📌 Notes

* Ensure server is running before testing
* Use `Content-Type: application/json` for POST/PUT requests

---
