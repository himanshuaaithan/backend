import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        loading: false
    },
    reducers: {
        setnotes: (state, action) => {
            state.notes = action.payload
        },
        setloading: (state, action) => {
            state.loading = action.payload
        }
    }
})


export const { setloading, setnotes } = noteSlice.actions
export default noteSlice.reducer