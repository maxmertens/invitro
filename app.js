// Global variables
let http = require('http');
let express = require('express');
let io = require('socket.io');
let five = require("johnny-five");
let rotaryEncoder = require('./encoder');

// require jquery?? <-


// Create app instance
let app = new express();
// Set the port number
let port = 3000;
// Set the app instance to read the public directory -> index.html
app.use(express.static(__dirname + '/public'));


// Create board instance
let board = new five.Board();

// If board is ready, start encoder function
board.on("ready", function() {
  console.log('%cArduino ready', 'color: green;');
  encoder();
});

function encoder(){
  console.log('encoder is ready');

  const pressButton = new five.Button(13);
  const downButton = new five.Button(6);
  const upButton = new five.Button(7);

  var i = 0;

    var rotate = 0;
    var down = 0;
    var press = true;

  rotaryEncoder({
    upButton,
    downButton,
    pressButton,
    onUp: () => {
      console.log('up');
      rotate++;
      io.emit('data', 'up');
    },
    onDown: () => {
      console.log('down');
      rotate--;
      io.emit('data', 'down');
    },
    onPress: () => {
      console.log('press');

        if(press == true) {
    
            press = false;
        } else {

            press = true;
        }
    },
  });
}



/* END TEST TEST */



// board.on("ready", function() {
//   console.log('Ardunio Ready');

//   let button = new five.Button(2);
  
//   board.repl.inject({
//     button: button
//   });
  
//   button.on("down", function() {
//     console.log("down");

//     io.emit('data', 'down');
//   });
  
// }); 



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