import React, { useState } from 'react'
import ModalForm from './ModalForm'
import { UserAddOutlined } from '@ant-design/icons'

const Registration = () => {
  const [visible, setVisible] = useState(false)

  const onSignIn = (values: any) => {
    console.log('onSignIn: ', values)
    setVisible(false)
  }
  const onSignUp = (values: any) => {
    console.log('onSignUp: ', values)
    setVisible(false)
  }

  return (
    <div>
      <UserAddOutlined
        onClick={() => {
          setVisible(true)
        }}
        style={{
          marginRight: '20px',
          color: 'white',
          fontSize: '40px',
          paddingTop: '0.8%',
        }}
      />

      <ModalForm
        visible={visible}
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}
export default Registration
