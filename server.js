
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen" },
  { id: 2, title: "Data Structures Using C & C++", author: "E.Balagurusamy" },
  { id: 3, title: "The C Programming Language", author: "Brian W. Kernighan" }  
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
