const express = require('express');
const scheduleJob = require('./scheduleJob');

const app = express();

scheduleJob();

app.listen(3000, () => {
  console.log('Server running...');
});