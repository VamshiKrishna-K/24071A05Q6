## ▶️ Step 1: Start the Server

Run the following command to start your Node.js server:

```powershell
node server.js
```

You should see a message saying:
`Server is running on http://localhost:3000`

---

## 🧪 Step 2: How to Test the Application (using Postman or cURL)

Because this application uses JWT Authentication, you cannot just open the URLs in your browser. You need to log in first to get an access token, and then pass that token to access the other routes.

---

### 1️⃣ Login to Get a Token

Make a **POST** request to:

```
http://localhost:3000/login
```

👉 No body is required — it will create a dummy user automatically.

You will receive a response like this:

```json
{
  "accessToken": "eyJh... (a very long string) ...xw"
}
```

📌 Copy the `accessToken` value.

---

### 2️⃣ Access the Protected Routes

Now you can make requests to any of the student endpoints (**GET, POST, PUT, DELETE**), but you must include the token in the request headers.

**Header Configuration:**

```
Key: Authorization
Value: Bearer YOUR_ACCESS_TOKEN_HERE
```

⚠️ Replace `YOUR_ACCESS_TOKEN_HERE` with the token you copied.
Make sure to include the word **Bearer** followed by a space.

---

### 📌 Example: Get All Students

Make a **GET** request to:

```
http://localhost:3000/students
```

Include the Authorization header.

**Response:**

```json
[
  { "id": 1, "name": "John Doe", "age": 20, "grade": "A" },
  { "id": 2, "name": "Jane Smith", "age": 22, "grade": "B" }
]
```
