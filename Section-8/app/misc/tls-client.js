/**
 * Example TLS client
 * Connects to port 6000 and sends the word "ping" to servers
 * 
 */

// Dependencies
const fs = require('fs');
const path = require('path');
const tls = require('tls');

// Define the message to send
const outboundMessage = 'ping';

// Client options
const options = {
  ca: [fs.readFileSync(path.join(__dirname, '/../https/cert.pem'))] // Only required because we're using a self-signed cert
};

// Create the client
const client = tls.connect(6000, options, function () {
  // Send the message
  client.write(outboundMessage);
});

// When the serer writes back, log what it says then kill the client
client.on('data', function (inboundMessage) {
  const messageString = inboundMessage.toLocaleString();
  console.log(`I wrote ${outboundMessage} and they said ${messageString}`);
  client.end();
});