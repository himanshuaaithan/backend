const experss = require('express');
const noteModel = require('./models/note.model')
const cors = require("cors")

const app = experss();
app.use(experss.json());
app.use(cors())
app.use(experss.static('./public'))

// POST /api/notes
//create note 
// {title , description} from req.body
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body

    const notes = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully.",
        notes: notes
    })
});


// GET /api/notes
// get notes data from database
app.get('/api/notes', async (req, res) => {

    const notes = await noteModel.find()

    res.status(200).json({
        message: "notes data fatched successfully.",
        notes: notes
    })
})

// patch /api/notes/:id 
// update description using id 
// {description} from req.body
app.put('/api/notes/:id', async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body

    await noteModel.findByIdAndUpdate(id, { title, description })

    res.status(200).json({
        message: 'note updated successfully.'
    })
})


// DELETE /api/notes/:id
//note delete 

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: 'note delete successfully.'
    })
})


module.exports = app;
