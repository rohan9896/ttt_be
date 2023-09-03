const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
var socketio = require('socket.io')

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketio(server)

app.use(express.json())

const DB = "mongodb+srv://rohan:rohangupta1@datadump.rzxhj05.mongodb.net/?retryWrites=true&w=majority";

io.on('connection', (socket) => {
    console.log('Socket connected!');
    socket.on('chat message', (arg) => {
        console.log(arg);
    })
})

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('errr...', e);
})

server.listen(port, '0.0.0.0', () => {
    console.log('Server started and running on port -', port);
})
