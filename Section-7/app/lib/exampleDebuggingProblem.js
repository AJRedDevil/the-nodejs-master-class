/**
 * Library that demonstrates something throwing when it's init() is called
 * 
 */

// Container for module (to be exported)
const example = {};

// Init function
example.init = function () {
  // This is an eror create intentionally (bar is not defined)
  let foo = bar;
};

// Export the module
module.exports = example;