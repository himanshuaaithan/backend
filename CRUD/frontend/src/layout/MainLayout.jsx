import React from 'react'
import NotePage from '../pages/NotePage'
import NoteCreate from '../pages/NoteCreate'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
export default MainLayout