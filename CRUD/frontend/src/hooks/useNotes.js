import { noteUpdateApi, NotesDataFatched, NotesDeleteApi } from "../service/api.js"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { setnotes, setloading } from "../redux/features/noteSlice.js"

import { useNavigate } from "react-router"

export const useNotes = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const notes = useSelector((state) => state.note.notes)
    const loading = useSelector((state) => state.note.loading)

    const notesData = async () => {
        dispatch(setloading(true))
        const res = await NotesDataFatched()
        dispatch(setnotes(res.notes))
        dispatch(setloading(false))
    }

    const notedelete = async (id) => {
        const res = await NotesDeleteApi(id)
        notesData()
    }

    const noteupdatehook = async (id, title, description) => {
        const res = await noteUpdateApi(id,title,description)
        notesData()

    }

    return {
        notesData, notes, loading, notedelete, noteupdatehook
    }

}