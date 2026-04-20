# 📚 XML Bookstore Validation (DTD & XSD)

This project demonstrates how to validate an XML file (`bookstore.xml`) using both DTD and XSD in VS Code.

---

## 🚀 Setup Instructions

1. Open VS Code  
2. Go to Extensions (Ctrl + Shift + X)  
3. Search and install: XML by Red Hat  
4. Open the project folder  

---

## ▶️ How to Run

- Open `bookstore.xml` in VS Code  
- The XML file will be automatically validated  

### Output

- ✅ No errors → XML is valid  
- ❌ Red underline → XML is invalid  

---

## 🧪 DTD Validation Test

### Step

Remove the `<price>` element from any `<book>`

### Example (Invalid XML)

```xml
<book>
    <title>XML Guide</title>
    <author>John</author>
    <year>2022</year>
</book>
```

### Result

- ❌ Error will be shown  
- ✔ Reason: DTD requires `<price>` for every `<book>`

---

## 🧪 XSD Validation Test

### Step

Change year to an invalid value  

### Example (Invalid XML)

```xml
<year>abcd</year>
```

### Result

- ❌ Error will be shown  
- ✔ Reason: XSD enforces `xs:gYear` (valid year format only)

---

## 🖼️ Output Screenshots

### DTD Validation Error
<img width="767" height="569" alt="{079EB5C3-1014-4294-95B7-4DDD09155C7D}" src="https://github.com/user-attachments/assets/ffcee02a-2232-4a11-85f8-450f22dbcafa" />

### XSD Validation Error
<img width="722" height="576" alt="{012EF888-1229-497D-BF02-B4C4B425A4A9}" src="https://github.com/user-attachments/assets/82254ef1-1189-453a-aceb-a6aca8ee6809" />



---
