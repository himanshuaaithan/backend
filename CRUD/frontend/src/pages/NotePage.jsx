import React from 'react'
import Notes from '../components/Notes'
import NoteButton from '../components/NoteButton'

const NotePage = () => {
  return (
    <div className='min-h-screen bg-amber-100 flex w-full gap-2 p-10 flex-col'>
      <NoteButton />
      <Notes />
    </div>
  )
}

export default NotePage