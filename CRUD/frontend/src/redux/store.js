import { configureStore } from "@reduxjs/toolkit";
import noteSlicereducers from './features/noteSlice'


export const store = configureStore({
    reducer: {
        note: noteSlicereducers,
    }
})