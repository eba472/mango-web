import React, { useEffect, useState } from 'react'
import './static/css/style.css'
import FlashcardComponent from './components/FlashcardComponent'
import Button from './components/Button'
import { useTranslation } from 'react-i18next'
import firebase from 'firebase/compat/app'
import { useAuthState } from 'react-firebase-hooks/auth'

const auth = firebase.auth()
const firestore = firebase.firestore()

const Flashcard = () => {
  const { t } = useTranslation('common')
  const [user] = useAuthState(auth as any)
  const [flashcardsData, setFlashcardsData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const flashcardData = await (
        await firestore.collection('flashcard').doc(user?.uid).get()
      ).data()
      setFlashcardsData(flashcardData?.words)
    }
    fetchData().catch(console.error)
  }, [user])

  const [showFront, setShowFront] = useState(true)
  const dataLength = flashcardsData?.length
  let component
  var [index, setIndex] = useState(0)
  if (index < dataLength) {
    component = (
      <div>
        <FlashcardComponent
          flashcards={flashcardsData}
          showFront={showFront}
          setShowFront={setShowFront}
          index={index}
        />
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
      {component}
    </div>
  )
}

export default Flashcard
