import { createBrowserRouter } from "react-router";
import Notes from "../components/Notes";
import MainLayout from "../layout/MainLayout";
import NotePage from "../pages/NotePage";
import NoteCreate from "../pages/NoteCreate";
import NoteUpdate from "../pages/NoteUpdate";


export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <NotePage />
            },
            {
                path:'create/notes',
                element:<NoteCreate/>
            },{
                path:'update/notes/:id',
                element:<NoteUpdate/>
            }
        ]
    }
])