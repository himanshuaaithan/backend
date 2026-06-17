const express = require("express");
const noteModel = require("./model/notes.model")

const app = express();

app.use(express.json())


// POST /notes 
// create note 
app.post('/notes', async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully",
        notes: note
    })
})

// GET /notes 
// notes data fatched 
app.get('/notes', async (req, res) => {
    const note = await noteModel.find();

    res.status(200).json({
        message: 'notes fatched successfullly',
        notes: note
    })
})


// DELETE / notes 
// note delete 
app.delete('/notes/:index', async (req, res) => {
    const id = req.params.index

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:'note delete successfully',
        // notes:note

    })
})


module.exports = app