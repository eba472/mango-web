import React from 'react'
import CommonWords from './components/CommonWords'
import SearchComponent from './components/SearchComponent'
import SideBar from './components/SideBar'
import SignIn from './components/SignIn'
import Signup from './components/Signup'
import WordOfday from './components/WordOfday'

const Dictionary = () => {
  return (
    <div>
      <SearchComponent />
      <CommonWords />
      <SideBar />
      <WordOfday />
      <Signup /> <SignIn />
    </div>
  )
}

export default Dictionary
