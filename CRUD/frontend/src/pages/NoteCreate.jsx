import React from 'react'
import { useState } from 'react'
import { useCreateNote } from '../hooks/useCreateNote'
import { useNavigate } from 'react-router'





const NoteCreate = () => {

    const { notecreate } = useCreateNote();
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const fromHandle = (e) => {
        e.preventDefault()
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center bg-amber-100'>


            <form onSubmit={(e) => { fromHandle(e) }} className='bg-yellow-200 rounded flex flex-col gap-5 p-10 justify-center'>

                <input required className='border p-5 rounded outline-0 text-2xl' type="text" value={title} placeholder='title' onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <input required className='border p-5 rounded outline-0 text-2xl' type="text" value={description} placeholder='descripiton' onChange={(e) => {
                    setDescription(e.target.value)
                }} />

                <div className='flex justify-end'>
                    <button className='bg-orange-500 font-extrabold text-white w-50 p-3 rounded cursor-pointer active:scale-95 transition-all ease-in' onClick={()=>{
                         notecreate(title, description)
                         navigate('/')

                    }}>create</button>
                </div>
            </form>


        </div>
    )
}

export default NoteCreate