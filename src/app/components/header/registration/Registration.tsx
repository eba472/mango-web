import { Button } from 'antd'
import firebase from 'firebase/compat/app'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'

firebase.initializeApp({
  apiKey: 'AIzaSyDOpnWwgDajQaMpmncBUL0Rv5CcLMUsVkk',
  authDomain: 'aplus-4ae14.firebaseapp.com',
  projectId: 'aplus-4ae14',
  storageBucket: 'aplus-4ae14.appspot.com',
  messagingSenderId: '1065455070773',
  appId: '1:1065455070773:web:5f16f442e1ed6b28becb7c',
  measurementId: 'G-YZLRQ0WT1X',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const Registration = () => {
  const { t } = useTranslation('common')
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button style={{ margin: 50 }} onClick={signInWithGoogle}>
        {t('LeftDiv.signInLong')}
      </Button>
      {/* <ModalForm
        visible={visible}
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        onCancel={() => {
          setVisible(false)
        }}
      /> */}
    </div>
  )
}
export default Registration
