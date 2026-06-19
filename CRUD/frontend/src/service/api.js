import axios from 'axios'

export const NotesDataFatched = async () => {
    const res = await axios.get('http://localhost:3000/api/notes')
    return res.data
}


export const NotesCreateApi = async (title, description) => {
    await axios.post('http://localhost:3000/api/notes', {
        title, description
    })
}

export const NotesDeleteApi = async (id) => {

    await axios.delete(`http://localhost:3000/api/notes/${id}`)

}

export const noteUpdateApi = async (id, description, title) => {
    const res = await axios.put(`http://localhost:3000/api/notes/${id}`, {
        title,
        description
    })

    return res.data
}