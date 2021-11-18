var seneca=require('seneca')()
seneca.quiet();
 seneca.use('seneca-amqp-transport')
  .add('cmd:log,level:*', function(mes, res) {
    console[mes.level](mes.message);
    return res(null, { ok: true, when: Date.now() });
  })
  .listen({
    type: 'amqp',
    pin: 'cmd:log,level:*',
    url: "amqp://guest:guest@localhost:5672"
  });
