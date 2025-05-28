// app.js
const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Jenkins!');
};

const server = http.createServer(requestListener);
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
