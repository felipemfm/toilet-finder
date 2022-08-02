const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// add middlewares
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/test', (req, res) => {
  res.status(200).json({ status: 'success', message: 'From express' });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

module.exports = app;
