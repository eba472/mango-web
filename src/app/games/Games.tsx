import React from 'react'
import ChooseLevel from './game/snake/ChooseLevel'
import GamePage from './components/GamePage'
import QuestionModal from './components/QuestionModal'

const Games = () => {
  return (
    <>
      <div id='mainGame'>
        
      </div>
      <GamePage />
      {/* <ChooseLevel /> */}
      <QuestionModal />
      
    </>
  )
}

export default Games
