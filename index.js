var hapi = require('hapi');
var moonboots = require('moonboots_hapi');

var port = parseInt(process.env.PORT) || 8100;
var server = hapi.createServer(port, 'localhost');

server.pack.register({
  plugin: moonboots,
  options: {
    appPath: '/{p*}',
    browserify: {
      transforms: ['brfs']
    },
    moonboots: {
      main: __dirname + '/app/js/index.js',
      developmentMode: true
    }
  }
}, function () {
  server.start(function () {
    console.log('server has started on: http://localhost:' + port);
  });
});