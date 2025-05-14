# 📚 Library App

A small client‑side library manager that lets you add, display, remove, and toggle the “read” status of books. Built to practice JavaScript constructors, prototype methods, and dynamic DOM rendering without any backend.

## 🔗 Live Demo  
[View the live demo](https://festivechicken.github.io/library/)  

## 🛠️ Features
- **Add New Book** via a form (title, author, pages, read status)  
- **Display Books** dynamically as cards on the page  
- **Remove Book** with a single click  
- **Toggle Read Status** on each book card  
- **Unique IDs** generated with `crypto.randomUUID()`  
- Clean separation of **data** (book objects) and **rendering** logic  

## 🧠 What I Learned
- Creating JavaScript **constructors** and **prototype methods**  
- Generating **unique IDs** with `crypto.randomUUID()`  
- **Preventing default** form submission with `event.preventDefault()`  
- **Data‑driven rendering**: looping through an array to build the UI  
- Managing **event listeners** for dynamic elements  
- Using **data attributes** to link DOM elements to underlying data  

## 📚 Assignment Summary
This project was part of The Odin Project’s JavaScript curriculum. The goals were to:
1. Set up a `Book` constructor and `addBookToLibrary()` function to store book objects in an array.  
2. Loop through the array to **render** each book as a card or table entry.  
3. Implement a **modal/form** for creating new books.  
4. Use `event.preventDefault()` to handle form submissions client‑side.  
5. Add **remove** and **toggle read** buttons on each book card, using `data-id` attributes to identify the book.  

---

Built with ❤️ by [FestiveChicken](https://github.com/FestiveChicken)
