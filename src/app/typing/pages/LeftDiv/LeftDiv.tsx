import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Switch, Divider } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import AnalyticsIcon from '@mui/icons-material/Analytics'
const LeftDiv = () => {
  const { t } = useTranslation('common')
  return (
    <div style={{ height: '100%' }}>
        <Menu
    style={{ fontSize: 20 }}
    mode={'vertical'}>
    
    <Menu.Item key="0">
      <Link to='/'>
        <img
        src="https://picsum.photos/200/300.jpg"
        alt="UserPic"
        style={{ width: '95px', height: '90px' }}
        ></img>
        {/* style={{ alignItems: 'center', fontSize: '20px', paddingTop: '10px' }} */}
        john Doe
      </Link>
    </Menu.Item>
    <Menu.Item key="1" >
     <AccountCircleIcon />
     <Link to='/Login' >{t('LeftDiv.logIn')}</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<KeyboardIcon/>} style={{ fontSize: 25 }}>
     <Link to='/Practice' >{t('LeftDiv.Practice')}</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<AnalyticsIcon />} style={{ fontSize: 25 }}>
     <Link to='/Profile' >{t('LeftDiv.Profile')}</Link>
    </Menu.Item>
    
        </Menu>
    </div>
  )
}

export default LeftDiv