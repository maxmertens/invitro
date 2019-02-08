// Global variables
let http = require('http');
let express = require('express');
let io = require('socket.io');
let five = require("johnny-five");
let rotaryEncoder = require('./public/js/encoder');

// require jquery?? <-


// Create app instance
let app = new express();
// Set the port number
let port = 3000;
// Set the app instance to read the public directory -> index.html
app.use(express.static(__dirname + '/public'));


// Create board instance
let board = new five.Board();

board.on("ready", function() {

  button1 = new five.Button(2);
  button2 = new five.Button(3);
  button3 = new five.Button(4);
  button4 = new five.Button(5);

  board.repl.inject({
    button: button1,
    button: button2,
    button: button3,
    button: button4
  });

  button1.on("down", function() {
    console.log("down1");
    io.emit('data', 1);
  });

  button2.on("down", function() {
    console.log("down2");
    io.emit('data', 2);
  });

  button3.on("down", function() {
    console.log("down3");
    io.emit('data', 3);
  });

  button4.on("down", function() {
    console.log("down4");
    io.emit('data', 4);
  });


});



// Begin 'listening' on the pre defined port number (3000)
const server = http.createServer(app).listen(port, function(req, res){
  console.log('LISTENING ON PORT ' + port);
});

// Set up socket.io to 'listen'
io = io.listen(server);

// Display a conection message
io.on('connection', function(socket){
  console.log('SOCKET.IO CONNECTED');

  // Display a disconnection message
  socket.on('disconnect', function(){
    console.log('SOCKET.IO DISCONNECTED');
  })
});






/*
board.on("ready", function() {
  console.log('%cArduino ready', 'color: green;');

  // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });
*/
