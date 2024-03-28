const { Server } = require("socket.io")
const { createServer } = require("http")
const express = require("express")

const app = express()


const ChatServer = createServer(app)

const io = new Server(ChatServer, {
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  },
  })

  io.on("connection", (socket) => {
    console.log(`Socket Connected: ${socket.id}`)
  
    socket.on('send', (message) => {
      console.log('Received message:', message)
      io.emit('recive', message)
    })
  
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`)
    })
  })


ChatServer.listen(3001,()=>{
    console.log("Socket.io is running on port 3001")
  }
  )