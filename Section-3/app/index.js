/**
 * Primary file for API
 * 
 */

// Dependencies
const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;
const url = require('url');

// Configure the server to respond to all request with a string
const server = http.createServer(function (req, res) {

  // Parse the url
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', function (data) {
    buffer += decoder.write(data);
  });
  req.on('end', function () {
    buffer += decoder.end();

    // Check the router for a matching path for a handler.
    // If one is not found, use the notFound handler instead.
    const chosenHandler = typeof (router[trimmedPath]) !== 'undefined' ?
      router[trimmedPath] : handlers.notFound;

    // Construct the data object to send to the handler
    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: buffer
    };

    // Route the request to the handler specified in the router
    chosenHandler(data, function (statusCode, payload) {

      // Use the status code returned from the handler, or set the default status code to 200
      statusCode = typeof (statusCode) == 'number' ? statusCode : 200;

      // Use the payload returned from the handler, or set the default payload to an empty object
      payload = typeof (payload) == 'object' ? payload : {};

      // Convert the payload to a string
      const payloadString = JSON.stringify(payload);

      // Return the response
      res.writeHead(statusCode);
      res.end(payloadString);
      console.log(`Returnning this response: ${statusCode} ${payloadString}`);
    });

    // Send the response
    res.end('Hello World!\n');

    // Log the request/response
    console.log(`Request received with this payload: ${JSON.stringify(buffer)}`);
  });
});

// Start the server, and have it listen on port 3000
server.listen(3000, function () {
  console.log('The server is up and listening on port 3000');
});

// Define all the handers
const handlers = {};

// Sample handler
handlers.sample = function (data, callback) {
  // Callback a http status code, and a payload object
  callback(200, {
    name: 'sample handler'
  })
};

// Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};

// Define the request router
const router = {
  sample: handlers.sample
};