var http = require('http'),
  httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
console.log('listening on port 8000');
httpProxy.createProxyServer({target:'http://142.93.141.134:1337/'}).listen(1337);