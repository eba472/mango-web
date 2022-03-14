import { UserAddOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ModalForm from './ModalForm'

const Registration = ({
  sideMenuVisible,
  setSideMenuVisible,
}: {
  sideMenuVisible: boolean
  setSideMenuVisible: (sideMenuVisible: boolean) => void
}) => {
  const { t } = useTranslation('common')

  const onSignIn = (values: any) => {
    console.log('onSignIn: ', values)
    setSideMenuVisible(false)
  }
  const onSignUp = (values: any) => {
    console.log('onSignUp: ', values)
    setSideMenuVisible(false)
  }
  console.log('sideMenuVisible :>> ', sideMenuVisible)
  return (
    <Menu.Item
      key='4'
      style={{ color: 'white', fontSize: '20px' }}
      icon={<UserAddOutlined />}
      onClick={() => setSideMenuVisible(true)}
    >
      {t('LeftDiv.logIn')}
      <ModalForm
        visible={sideMenuVisible}
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        onCancel={() => {
          setSideMenuVisible(false)
        }}
      />
    </Menu.Item>
  )
}
export default Registration
