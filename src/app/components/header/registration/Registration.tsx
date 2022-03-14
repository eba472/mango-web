import { UserAddOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ModalForm from './ModalForm'


const Registration = () => {
  const { t } = useTranslation('common')

  const [visible, setVisible] = useState(true)

  const onSignIn = (values: any) => {
    console.log('onSignIn: ', values)
    setVisible(false)
  }
  const onSignUp = (values: any) => {
    console.log('onSignUp: ', values)
    setVisible(false)
  }

  return (
    <Menu.Item key='4' style={{ color: 'white', fontSize: '20px' }} icon={<UserAddOutlined />} onClick={() => {
      setVisible(true)
    }}>
      {t('LeftDiv.logIn')}
      <ModalForm
        visible={visible}
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        onCancel={() => {
          setVisible(false)
        }}
      />

    </Menu.Item>

  )
}
export default Registration
