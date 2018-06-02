const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:adminRoutes')

const adminRouter = express.Router();

const books = [
  { Title: 'War and Peace1', Genre: 'Historical Fiction', Author: 'Jignesh Mistry', Read: 0 },
  { Title: 'The Time Machine1', Genre: 'Science Fiction', Author: 'Kishan Solanki', Read: 0 }];

adminRouter.route('/')
  .get((req, res) => {
    books.forEach(function (book) {
      const request = new sql.Request();
      request
        .input('Title', sql.NVarChar, book.Title)
        .input('Genre', sql.NVarChar, book.Genre)
        .input('Author', sql.NVarChar, book.Author)
        .input('Read', sql.Int, book.Read)
        .query('Insert into Book (Title,Genre,Author,[Read]) values (@Title,@Genre,@Author,@Read)').then(result => {
        });
    }, this);
    res.send('inserting records');
  });

module.exports = adminRouter;
