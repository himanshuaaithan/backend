const express = require("express");

const app = express()

// midleware
app.use(express.json())

//server port number 
const PORT = 3000

//notes arr
const notes = []

// notes create api 
// post api 
app.post('/create/notes', (req, res) => {
    notes.push(req.body)
    res.send(req.body)
})

// notes data fatch api
//getapi
app.get('/get/notes', (req, res) => {
    res.send(notes)
})

// server runing 
app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})