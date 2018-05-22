const app = require('express')();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Het there.');
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.green('3000')}`);
});
