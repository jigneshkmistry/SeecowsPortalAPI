const express = require('express');

const books = [
    { id: 1, title: "War and Peace", genre: "Historical Fiction", author: "Jignesh Mistry", read: false },
    { id: 2, title: "The Time Machine", genre: "Science Fiction", author: "Kishan Solanki", read: false }
  ];

const bookRouter = express.Router();
  
bookRouter.route('/')
.get((req, res) => {
  res.render("books", { books });
});

bookRouter.route('/:id')
.get((req, res) => {
    const bookID = req.params.id;
  res.render("book",books[bookID]);
});

module.exports = bookRouter;

