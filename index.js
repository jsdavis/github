const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there. I\'m a server.');
});

app.listen(8080, (err) => {
  if (err) console.log(err);
});

module.exports = app;