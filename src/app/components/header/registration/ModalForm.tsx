import { Form, Modal } from 'antd'
import React, { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

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

// const dataAdd = () =>
//   firestore
//     .collection('engMonDict')
//     .doc(`${engWords}`)
//     .set({
//       mn: `${monWords}`,
//     })
//     .then(() => {
//       console.log('haha')
//     })

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

  return (
    <Modal
      visible={visible}
      title={isUser ? 'Sign in' : 'Sign up'}
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
      {isUser ? (
        <SignIn setIsUser={setIsUser} />
      ) : (
        <Signup setIsUser={setIsUser} />
      )}
    </Modal>
  )
}

export default ModalForm
