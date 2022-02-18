import { Form, Modal } from 'antd'
import React, { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'

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
