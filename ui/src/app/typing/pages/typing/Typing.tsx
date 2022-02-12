import SideMenu from 'app/typing/sideMenu/SideMenu'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Typing() {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      <div className="App">
        <div className="headerContainer">
          <div className="HeadingAd"></div>
        </div>
        <div className="leftDiv">
          <div className="SecondAd"></div>
        </div>
        <div className="middleDiv">
          <div className="MainPart">
            <Outlet />
          </div>
        </div>
        <div className="rightDiv">
          <SideMenu />
        </div>
      </div>
    </div>
  )
}

export default Typing
