import React, { useState } from 'react'
import { useNotes } from '../hooks/useNotes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'



const Notes = () => {

    const navigate = useNavigate();
    const { notesData, notes, loading, notedelete, noteupdate, } = useNotes()
    const [id, setid] = useState('')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    useEffect(() => {
        notesData()
    }, [])

    if (loading) {
        return (
            <div>
                <h1>laoding.....</h1>
            </div>
        )
    }

    return (
        <div className='max-h-screen w-full flex gap-2 flex-wrap '>
            {
                notes.length === 0 ? <h1>create a note </h1> : notes.map((item, idx) => {
                    return <div key={idx} className='bg-amber-200 max-h-40 p-2 min-w-100 rounded'>
                        <h1><span className='text-green-500 font-extrabold'>title: </span> {item.title}</h1>
                        <p> <span className='text-green-500 font-extrabold'>description:</span> {item.description}</p>
                        <div className='flex justify-between mt-4'>
                            <button onClick={() => {
                                const id = item._id
                              navigate(`/update/notes/${id}`)
                            //   setid(item._id)
                            //   settitle(item.title)
                            //   description(item.description)
                            }} className='cursor-pointer'><i className="ri-pencil-fill"></i></button>
                            <button onClick={() => {
                                const id = item._id
                                notedelete(id)

                            }} className='cursor-pointer'><i className="ri-delete-bin-line"></i></button></div>
                    </div>
                })}
        </div>
    )
}

export default Notes