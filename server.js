const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const path = require('path');

const smoothieRoutes = require('./routes/smoothieRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('<h1>Index page</h1>'));

app.use('/smoothies', smoothieRoutes);

app.get('*', (req, res) => res.json({ message: 'Page not found' }));

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT} in ${app.get('env')} environment.`);
});
