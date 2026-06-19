import React from 'react'
import { useNavigate } from 'react-router'

const NoteButton = () => {

    const navigate = useNavigate()
    return (
        <>
       <div>
         <button onClick={()=>{
            navigate('/create/notes')
         }} className='bg-orange-500 font-extrabold text-white w-50 p-3 rounded cursor-pointer active:scale-95 transition-all ease-in'>create note </button>
       </div>
        </>


    )
}

export default NoteButton