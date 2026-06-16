const express = require("express");

const app = express();
app.use(express.json());

// notes arr
const notes = []

// POST /notes
app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.send('note created')
})

// GET /notes
app.get("/notes", (req, res) => {
    res.send(notes)
})

// DELETE /notes/:index
app.delete('/notes/:index', (req, res) => {
    delete notes[req.params.index]
    res.send('note deleted successfully')
})

// PATCH /notes/:index
app.patch("/notes/:index", (req, res) => {
    const id = req.params.index
    notes[id].description = req.body.description
    res.send('note updated successfully')
})


module.exports = app