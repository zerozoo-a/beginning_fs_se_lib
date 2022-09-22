const http = require('http');
const options = {
  host: '127.0.0.1',
  path:'/',
  port:'8081',
  method:"POST"
}
// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);
