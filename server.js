const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const path = require('path');
const request = require('superagent');
const errorHandler = require('./utility/error-handler');

const smoothieRoutes = require('./routes/smoothieRoutes');
const userRoutes = require('./routes/userRoutes');

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

app.get('/api/ingredient', (req, res) => {
  const URL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
  const food = req.query.food;
  const qty = req.query.qty;

  request
    .post(URL)
    .send({ "query": `${qty} ${food}` })
    .set('x-app-id', '60eb81c3')
    .set('x-app-key','7ca4bd6075c9e859a2ec80f44e92150e')
    .set('Content-Type', 'application/json')
    .end((err, data) => {
      if (err) {
        res.status(500).json({ err });
      }
      if (!err) res.json({ ingredient: data.body.foods[0] });
    });
});

app.use('/smoothies', smoothieRoutes);
app.use('/users', userRoutes);

app.get('*', (req, res) => res.json({ message: 'Page not found' }));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT} in ${app.get('env')} environment.`);
});
