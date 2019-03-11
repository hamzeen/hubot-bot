const utils = require('./utils');

module.exports = function(robot) {
  const lulz = ['lol', 'rofl', 'lmao'];

  robot.hear(/what time is it/i, function(msg) {
    // let count = msg.match[1].toLowerCase();
    // console.log('count:: ' + msg);
    // if(msg.match[3]) {
      msg.send(new Date().toISOString());
    // }
  });

  robot.hear(/random smile/i, function(msg) {
    msg.send(msg.random(lulz));
  });

  robot.hear(/swfactory status/i, function(msg) {
    const swfUrl = 'https://tools.work.com';
    utils.scrape(swfUrl)
      .then(data => {
        // console.log('text fetched:: ' + data);
        msg.send('SWFactory Status: RUNNING');
      })
      .catch(err => {
        console.log(`failure:: ${err}`);
        msg.send('SPOILER ALERT! Software Factory is DOWN');
      });
  });
};
