var Slack = require('slack-node');
var CronJob = require('cron').CronJob;
apiToken = require('./key.json').token;
target = "U09G6N0GH"
random = "C03RYFN2M"
slack = new Slack(apiToken);

new CronJob('*/5 * * * * *', function() {
  slack.api("channels.info", { channel: random }, function(err, res) {
    var i = res.channel.members.indexOf(target)
    if (i < 0) {
      console.log('invite')
      slack.api("channels.invite", { channel: random, user: target })
    }
  });
}, null, true, 'Asia/Tokyo')
