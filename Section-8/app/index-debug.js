/**
 * Primary file for API
 *
 */

// Dependencies
const cli = require('./lib/cli');
const exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');
const server = require('./lib/server');
const workers = require('./lib/workers');

// Declare the app
const app = {};

// Init the function
app.init = function () {

  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function () {
    cli.init();
  }, 50);
  debugger;

  // Set foo at 1
  debugger;
  let foo = 1;
  console.log("Just assigned 1 to foo");
  debugger;

  // Increment foo
  debugger;
  foo++;
  console.log("Just incremented foo");
  debugger;

  // Square foo
  debugger;
  foo = foo * foo;
  console.log("Just multipled foo by itself");
  debugger;

  // Convert foo to a string
  debugger;
  foo = foo.toString();
  console.log("Just changed foo to a string");
  debugger;

  // Call the init script that will throw
  debugger;
  exampleDebuggingProblem.init();
  console.log('Just called the library');
  debugger;
};

// Execute
app.init()

// Export the app
module.exports = app;