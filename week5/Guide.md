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

---

## ✅ Done

- Database and table created  
- JDBC driver added  
- Now you can run your Java program  
