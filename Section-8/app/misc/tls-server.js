/**
 * Example TLS Server
 * Listens to port 6000 and send the word "pong" to clients
 * 
 */

// Dependencies
const fs = require('fs');
const path = require('path');
const tls = require('tls');

// Serever options
const options = {
  key: fs.readFileSync(path.join(__dirname, '/../https/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/../https/cert.pem'))
};

// Create the server
const server = tls.createServer(options, function (connection) {
  // Send the word "pong"
  const outboundMessage = 'pong';
  connection.write(outboundMessage);

  // When the client writes something, log it out
  connection.on('data', function (inboundMesasge) {
    const messageString = inboundMesasge.toString();
    console.log(`I wrote ${outboundMessage} and they said ${messageString}`);
  });
});

// Listen
server.listen(6000);