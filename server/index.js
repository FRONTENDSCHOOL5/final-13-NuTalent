const express = require('express');
const http = require("http");
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require("socket.io");
const PORT = process.env.PORT || 8000;

const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

app.use(express.static(path.join(__dirname, '../build')));

io.on("connection", (socket) => {
    console.log('연결되었습니다.')

    socket.on('send message', (data) => {
        console.log(data);
        // chatList에 새로운 메시지 추가

        io.emit('send message', data)
    })
})

io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message} `);
});



server.listen(PORT, () => console.log(`server is running ${PORT} `))

//
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});