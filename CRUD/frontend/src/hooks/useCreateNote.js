import { useDispatch, useSelector } from "react-redux";

import { NotesCreateApi } from "../service/api";
import { useNotes } from "./useNotes";



export const useCreateNote = () => {
     const {notesData} = useNotes()
    const notecreate = async (title, description) => {
        const data = await NotesCreateApi(title, description)
        notesData()
    }

    return {
        notecreate
    }
}