const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes')

const bookRouter = express.Router();

bookRouter.route('/')
  .get((req, res) => {
    const request = new sql.Request();
    request.query('select * from Book').then(result => {
      res.render("bookListView", { books : result.recordset });
    });
  });

bookRouter.route('/:id')
  .all((req, res, next) => {
    getBookByID(req, next);
  })
  .get((req, res) => {
    res.render("bookView", { book: req.book });
  });
  
function getBookByID(req, next) {
  const bookID = req.params.id;
  const request = new sql.Request();
  request.input('id', sql.Int, bookID)
    .query('select * from Book where id = @id')
    .then(result => {
      req.book = result.recordset[0];
      next();
    });
}

module.exports = bookRouter;

