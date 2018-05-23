const app = require('express')();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

app.use(morgan('tiny'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hey there!!!');
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
