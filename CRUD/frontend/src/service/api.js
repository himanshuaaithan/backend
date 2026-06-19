import axios from 'axios'

export const NotesDataFatched = async () => {
    const res = await axios.get('https://backend-ryor.onrender.com/api/notes')
    return res.data
}


export const NotesCreateApi = async (title, description) => {
    await axios.post('https://backend-ryor.onrender.com/api/notes', {
        title, description
    })
}

export const NotesDeleteApi = async (id) => {

    await axios.delete(`https://backend-ryor.onrender.com/api/notes/${id}`)

}

export const noteUpdateApi = async (id, description, title) => {
    const res = await axios.put(`https://backend-ryor.onrender.com/api/notes/${id}`, {
        title,
        description
    })

    return res.data
}