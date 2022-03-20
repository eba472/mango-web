import React, { useState }from 'react'
import './static/css/style.css'
import FlashcardComponent from './components/FlashcardComponent'
import Button from './components/Button'
import { useTranslation } from 'react-i18next'

const savedWordsByUser = [
  {
    word: 'apple',
    englishMeaning: 'One type of fruit, that we know',
    mongolianMeaning: 'Алим',
  },
  {
    word: 'Father',
    englishMeaning: 'Your father',
    mongolianMeaning: 'аав',
  },
  {
    word: 'Father',
    englishMeaning: 'Your father',
    mongolianMeaning: 'аав',
  },
]
const Flashcard = () => {
  const { t } = useTranslation('common')
  const flashcardsData = savedWordsByUser
  const [showFront, setShowFront] = useState(true)
  var dataLength = flashcardsData.length
  let component
  var [ index, setIndex ] = useState(0)
  if ( index < flashcardsData.length ) {
    component = (
      <div>
        <FlashcardComponent flashcards={flashcardsData} showFront={showFront} setShowFront={setShowFront} index={index} />
        <Button index={index} setIndex={setIndex} dataLength={dataLength} />
      </div>
      )
  } else {
    component = (
      <div>
        <p>{t('Flashcard.noMoreFlashcards')}!</p>
        <Button index={index} setIndex={setIndex} dataLength={dataLength} />
      </div>
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        fontSize: '50px !important',
      }}
      >
      { component }
    </div>
  )
}

export default Flashcard
