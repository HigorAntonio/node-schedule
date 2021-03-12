const schedule = require('node-schedule');

module.exports = () => {
  schedule.scheduleJob('* * * ? * *', () => {
    console.log('Running scheduleJob!');
  });
}