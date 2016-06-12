var Slack = require('slack-node');
apiToken = require('./key.json').token;
usb = "U09G6N0GH"
random = "C03RYFN2M"
slack = new Slack(apiToken);

slack.api("channels.info", { channel: random }, function(err, res) {
  var i = res.channel.members.indexOf(usb)
  if (i < 0) {
    console.log('invite')
    slack.api("channels.invite", { channel: rnadom, user: usb })
  }
});
