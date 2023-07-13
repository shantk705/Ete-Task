

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../Components/Header"

export const UserLayout = () => {
  return (
    <>
    <main className='layoutParent'>
    <Header/>
    <Outlet/>
    </main>
    </>
  )
}
