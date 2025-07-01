const {createServer} = require('http');

const {Server} = require('socket.io');

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8158'
  }
});

io.on('connection', (socket) => {
  socket.emit('main', 'Welcome');
  
  socket.on('message', (msg) => {
    console.log(msg);
    
    socket.broadcast.emit('message', msg);
  });
});

httpServer.listen(8000);