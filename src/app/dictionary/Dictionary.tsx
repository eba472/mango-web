import React from 'react'
import CommonWords from './components/CommonWords'
import SearchComponent from './components/SearchComponent'
import SideBar from './components/SideBar'
import WordOfday from './components/WordOfday'

const Dictionary = () => {
  return (
    <div>
      <SearchComponent />
      <CommonWords />
      <SideBar />
      <WordOfday />
    </div>
  )
}

export default Dictionary
