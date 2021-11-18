const client = require('seneca')()
client.quiet();
  client.use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:log,level:log',
    url: "amqp://guest:guest@localhost:5672"
  }).quiet();
client.ready(function() {
  client.act('cmd:log,level:log', {
    message: 'Hello World'
  }, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});
