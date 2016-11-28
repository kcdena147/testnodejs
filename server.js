var express = require('express'),
socketIO = require('socket.io'),

port = process.env.PORT || 8080,
ip = process.env.IP || '127.0.0.1',

server = express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)),
  
io = socketIO(server);


var run = function(socket){
// Socket process here!!!
socket.emit('greeting', 'Hello from Socket.IO');
// 'user-join' event handler here
socket.on('user-join', function(data){
console.log('User %s have joined', data);
socket.broadcast.emit('new-user', data);
})
}

io.on('connection', run);
