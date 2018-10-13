/**
 * Primary file for API
 * 
 */

// Dependencies
const http = require('http');
const url = require('url');

// Configure the server to respond to all request with a string
const server = http.createServer(function (req, res) {

  // Parse the url
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Send the response
  res.end('Hello World!\n');

  // Log the request/response
  console.log('Request received on path: ' + trimmedPath);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function () {
  console.log('The server is up and listening on port 3000');
});