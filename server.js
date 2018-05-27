const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.set('views', './src/views');
app.set('view engine', 'pug');

const bookRouter = require('./src/routes/bookRoutes');

app.use('/books',bookRouter);
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
