require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const notFound = require('./middlewares/notFound'); // import notFound เข้ามา
const error = require('./middlewares/error');
const { User, Product } = require('./models');
const app = express(); // ประกาศ app ให้ใช้ express

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('combined'));
}
console.log(Product.create);
// const { sequelize } = require('./models');
// sequelize.sync({ alter: true });

const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const authenticate = require('./middlewares/authenticate');
const db = require('./models');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/product', authenticate, productRoute);

app.use(notFound);
app.use(error);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server running on port ${port}`));
