import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../nav/Navbar'

export const Main = () => {
  return (
    <div>
        <div>

        <Navbar/>
        </div>
        <div>
            <Outlet/>
        </div>

    </div>
  )
}
