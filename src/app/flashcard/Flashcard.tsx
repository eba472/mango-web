import React from 'react'
import FlashcardComponent from './components/FlashcardComponent'
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
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        fontSize: '50px !important',
      }}>
      This is a flashcard app.
      <FlashcardComponent />
    </div>
  )
}

export default Flashcard
