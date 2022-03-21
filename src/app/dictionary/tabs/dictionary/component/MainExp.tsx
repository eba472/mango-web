import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const auth = firebase.auth()
const firestore = firebase.firestore()

const MainExp = ({ word, def }: { word: any; def: any }) => {
  const [user] = useAuthState(auth as any)
  const [savedWords, setSavedWords] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const flashcardData = await (
        await firestore.collection('flashcard').doc(user?.uid).get()
      ).data()
      setSavedWords(flashcardData?.words)
    }
    fetchData().catch(console.error)
  }, [user])

  const userLoggedIn = !!user
  const isWordAlreadySaved =
    savedWords?.filter((savedWord: any) => {
      if (savedWord.word === word) {
        return true
      }
    }).length > 0
  console.log('isWordAlreadySaved :>> ', isWordAlreadySaved)
  useEffect(() => {
    const saveToDB = async () => {
      await firestore.collection('flashcard').doc(user?.uid).set({
        words: savedWords,
      })
    }
    saveToDB().catch(console.error)
  }, [user, savedWords])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '36px',
          color: '#1d2a57',
          marginBottom: '20px',
        }}
      >
        {word}
      </div>

      <Tooltip
        title={!userLoggedIn && 'Please sign in first!'}
        color={'orange'}
      >
        <Button
          onClick={() => {
            if (userLoggedIn && !isWordAlreadySaved) {
              const updatedWord =
                savedWords && savedWords.concat([{ word: word, def: def }])
              setSavedWords(updatedWord)
            }
          }}
        >
          {isWordAlreadySaved ? <HeartFilled /> : <HeartOutlined />}
        </Button>
      </Tooltip>
    </div>
  )
}

export default MainExp
