var midi = require('midi');

// Set up a new input.
var input = new midi.input();

// Count the available input ports.
console.log(input.getPortCount());

console.log(input.getPortName(0));

input.on('message', function(deltaTime, message) {
  console.log('m:' + message + ' d:' + deltaTime);
});
input.ignoreTypes(false, false, false);

// Open the first available input port.
input.openPort(0);
