const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3100;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

mongoose.connect('mongodb://localhost/bookAPI');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
	res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
