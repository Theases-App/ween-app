const express = require("express")
const  db=require("./database/index.js")
const cors = require('cors')

require("./models/models.js")
const athentification=require("./router/authentificationroute")
const block=require("./router/blockroute")
const categorydetails=require("./router/categorydetailsroute")
const chat=require("./router/chatroute")
const event=require("./router/eventroute")
const favorite=require("./router/favoritroute")
const message=require("./router/messageroute")
const notification=require("./router/notificationroute")
const payment=require("./router/paymentroute")
const reports=require("./router/reportsroute")
const reservation=require("./router/reservationroute")
const userhaschat=require("./router/userhaschatroute")
const user=require("./router/userroute")

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// app.use(express.static(__dirname + '../../index.html'))

app.use("/token",athentification)
app.use("/block",block)
app.use("/cat",categorydetails)
// app.use("/chat",chat)
app.use("/event",event)
// app.use("/favorite",favorite)
// app.use("/message",message)
// app.use("/notification",notification)
// app.use("/payment",payment)
// app.use("/reports",reports)
app.use("/res",reservation)
// app.use("/userchat",userhaschat)
app.use("/user",user)

const publish_key ="pk_test_51OrECAD53RceJq3rNa41nZVlQzaCQA0iaYKyKPCFaqVnWa1VTzj8ngQBu8aSJ6lesLBRBa5JuMyiOa8gLbFnjmRt00fxMvKTp3"
const secret_key="pk_test_51OrECAD53RceJq3rNa41nZVlQzaCQA0iaYKyKPCFaqVnWa1VTzj8ngQBu8aSJ6lesLBRBa5JuMyiOa8gLbFnjmRt00fxMvKTp3"

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})
