import { Button, Form, Modal } from 'antd'
import React, { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDOpnWwgDajQaMpmncBUL0Rv5CcLMUsVkk",
  authDomain: "aplus-4ae14.firebaseapp.com",
  projectId: "aplus-4ae14",
  storageBucket: "aplus-4ae14.appspot.com",
  messagingSenderId: "1065455070773",
  appId: "1:1065455070773:web:5f16f442e1ed6b28becb7c",
  measurementId: "G-YZLRQ0WT1X"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
const engWords = 'qwerty'
const monWords = 'qwerty'
// const messageRef = firestore.collection('Eng-Mon dictionary');

// const query = messageRef.orderBy('createdAt').limit(25);

  // const [messages] = useCollectionData(query, {idField: 'id'});
  // const [formValue, setFormValue] = useState('');
  // const sendDictData = async() => {
  //   await messageRef.add({
  //     text: formValue,
  //     // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   setFormValue('');
  // }

  const dataAdd = () => firestore.collection('engMonDict').doc(`${engWords}`).set({
    mn: `${monWords}`
  }).then(() => {
    console.log("haha")
  })
interface Values {
  title: string
  description: string
  modifier: string
}

interface CollectionCreateFormProps {
  visible: boolean
  onSignIn: (values: Values) => void
  onSignUp: (values: Values) => void
  onCancel: () => void
}

const ModalForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onSignIn,
  onSignUp,
  onCancel,
}) => {
  const [form] = Form.useForm()
  const [isUser, setIsUser] = useState(true)
  // const [user] = useAuthState(auth)

  return (
    <Modal
      visible={visible}
      title={isUser ? 'Sign in' : 'Sign up' } 
      okText={isUser ? 'Sign in' : 'Sign up'}
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            if (isUser) {
              onSignIn(values)
            } else {
              onSignUp(values)
            }
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Button onClick={dataAdd}>Data add button</Button>
      {isUser ? (
        <SignIn setIsUser={setIsUser} />
      ) : (
        <Signup setIsUser={setIsUser} />
      )}
    </Modal>
  )
}

export default ModalForm
