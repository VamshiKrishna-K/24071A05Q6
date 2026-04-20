# ⚙️ Setup (MySQL + JDBC)

## 🗄️ Create Database & Table

Run this in MySQL:

```sql
CREATE DATABASE crud;
USE crud;

CREATE TABLE student (
    name VARCHAR(50),
    roll INT PRIMARY KEY,
    marks INT
);
```

---

## 🔌 Add MySQL Connector JAR in Eclipse

1. Download MySQL Connector (JDBC Driver)  
   👉 https://dev.mysql.com/downloads/connector/j/

2. In Eclipse:
   - Right-click your project  
   - Click **Build Path → Configure Build Path**  
   - Go to **Libraries tab**  
   - Click **Add External JARs**  
   - Select the downloaded `.jar` file  
   - Click **Apply and Close**
<img width="1151" height="674" alt="{8E3EDF04-FA66-4A6B-982B-7520B80A9037}" src="https://github.com/user-attachments/assets/f821a672-61af-4959-bcaa-6eb4a3cb2375" />

---

## ✅ Done

- Database and table created  
- JDBC driver added  
- Now you can run your Java program  
