const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));


const config = {
  user: 'sa',
  password: '#Wm2008!',
  server: 'MDN', // You can use 'localhost\\instance' to connect to named instance
  database: 'Books',
  options: {
      encrypt: false 
  }
}
sql.connect(config).catch(err => debug(err));

app.set('views', './src/views');
app.set('view engine', 'pug');

const bookRouter = require('./src/routes/bookRoutes');
const adminRouter = require('./src/routes/adminRoutes');

app.use('/books',bookRouter);
app.use('/admin',adminRouter);

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: "MyLibrary",
      list: [{ link: '/books', title: "Books" },
        { link: '/authors', title: "Authors" }]
    }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
