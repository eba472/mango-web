import React from 'react'
import CommonWords from './components/CommonWords'
import SearchComponent from './components/SearchComponent'
import SideBar from './components/SideBar'

const Dictionary = () => {
  return (
    <div>
      <SearchComponent />
      <CommonWords />
      <SideBar />
    </div>
  )
}

export default Dictionary
