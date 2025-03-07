import React from 'react'
import SideBarInfo from '../pages/info/InfoPersonal'
import { Outlet } from 'react-router-dom'

const MainLayoutInfo = () => {
  return (
    <div className="mx-auto grid grid-cols-6">
      <SideBarInfo />
      <main className="col-span-4">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayoutInfo
