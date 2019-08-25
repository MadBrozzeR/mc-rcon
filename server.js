const MadSocket = require('madsocket');
const Rcon = require('mbr-rcon');

const clients = {
  all: {},
  index: 0,
  add: function (client) {
    client.params = {id: this.index++};
    this.all[client.params.id] = client;
  },
  del: function (client) {
    delete this.all[client.params.id];
  }
};

const rcon = new Rcon({
  host: 'localhost',
  port: 25001
});

function send (type, data) {
  this.send(JSON.stringify({type, data}));
}

const WS = new MadSocket({
  error: function (error) {
    console.log(error);
  },
  connect: function () {
    const client = this;
    clients.add(this);
    client.params.connection = rcon.connect({
      onError: function (error) {
        console.log(error);
        send.call(client, 'error', 'Failed to connect to remote console');
      },
      onSuccess: function () {
        send.call(client, 'auth', 'ready');
      }
    });
  },
  disconnect: function () {
    this.params.connection.close();
    clients.del(this);
  },
  message: function (message) {
    let data;
    const client = this;
    try {
      data = JSON.parse(message);
    } catch (error) {
      data = {};
    }

    switch (data.type) {
      case 'auth':
        client.params.connection.auth({
          password: data.data,

          onSuccess: function () {
            send.call(client, 'auth', 'success');
          },
          onError: function () {
            send.call(client, 'error', 'Authentication failed');
          }
        });
        break;
      case 'command':
        client.params.connection.send(data.data, {
          onSuccess: function (data) {
            send.call(client, 'response', data);
          }
        });
        break;
      default:
        send.call(client, 'error', 'Wrong data format');
    }
  }
});

const page404Template = {
  title: '404 - Page Not Found',
  body: '<body>404 - Page Not Found</body>'
}

function get404Page () {
  this.status = 404;
  this.send(this.template(page404Template), 'html');
}

function getSocketConnection () {
  WS.leach(this.request, this.response);
}

const routes = {
  '/': __dirname + '/html/index.html',
  '/src/mbr-script.js': __dirname + '/node_modules/mbr-script/index.js',
  '/favicon.ico': __dirname + '/html/m-favicon.ico',
  '/src/style.js': __dirname + '/html/style.js',
  '/ws': getSocketConnection,

  default: get404Page
};

module.exports = function (request) {
  request.route(routes);
}
