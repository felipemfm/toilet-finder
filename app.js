const express = require('express');
const path = require('path');

const app = express();

// add middlewares
app.use(express.static(path.join(__dirname, './client/build')));
app.use(express.static('./client/public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});
module.exports = app;
