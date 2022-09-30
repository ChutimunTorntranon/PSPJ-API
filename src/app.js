require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const notFound = require('./middlewares/notFound'); // import notFound เข้ามา
const error = require('./middlewares/error');

const app = express(); // ประกาศ app ให้ใช้ express

// const { sequelize } = require('./models');
// sequelize.sync({ alter: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(notFound);
app.use(error);

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('combined'));
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server running on port ${port}`));
