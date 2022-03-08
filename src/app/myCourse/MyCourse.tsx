import React from 'react'
import { Outlet } from 'react-router-dom'
import Submenu from './components/Submenu'

const MyCourse = () => {
  return (
    <div
      style={{ width: 256, display: 'flex', justifyContent: 'space-between' }}
    >
      <Submenu />
      <div style={{ border: '1px solid black', width: 800, margin: 20 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default MyCourse
