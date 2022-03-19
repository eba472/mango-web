import React, { CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Menu } from 'antd'
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  UserAddOutlined,
  BorderOutlined,
  ContactsOutlined
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

function MainMenu() {
  const { t } = useTranslation('common')
  const [toggleCollapsed, setToggleCollapsed] = useState(false)

  const menuItemStyle: CSSProperties = {
    fontSize: '20px',
  }
  const badgeStyle: CSSProperties = {
    backgroundColor: 'white',
    padding: '0px 5px ',
    color: '#000',
    fontSize: '8px',
    fontWeight: 'bold',
  }

  return (
    <div
      id='mainMenuOnTheSide'
      style={{ width: '20%', minWidth: 200, marginTop: 100 }}
      onMouseEnter={() => setToggleCollapsed(false)}
      onMouseLeave={() => setToggleCollapsed(true)}
    >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='vertical'
        theme='light'
        inlineCollapsed={toggleCollapsed}
      >
        <Menu.Item key='1' style={menuItemStyle} icon={<PieChartOutlined />}>
          <Link to='/dictionaryNav'>{t('menu.dictionary')}</Link>
        </Menu.Item>

        <Menu.Item
          key='2'
          style={menuItemStyle}
          disabled={true}
          icon={<DesktopOutlined />}
        >
          <Badge
            count={t('menu.comingSoon')}
            size='small'
            offset={[12, -2]}
            style={badgeStyle}
          >
            <Link to='/games' style={{ fontSize: 20 }}>
              {t('menu.games')}
            </Link>
          </Badge>
        </Menu.Item>

        <Menu.Item
          key='3'
          style={menuItemStyle}
          disabled={true}
          icon={<ContainerOutlined />}
        >
          <Badge
            count={t('menu.comingSoon')}
            size='small'
            offset={[12, -2]}
            style={badgeStyle}
          >
            <Link to='/myCourse' style={{ fontSize: 20 }}>
              {t('menu.myCourse')}
            </Link>
          </Badge>
        </Menu.Item>

        <Menu.Item key='4' style={menuItemStyle} icon={<BorderOutlined />}>
          <Link to='/flashcard'>{t('menu.flashcard')}</Link>
        </Menu.Item>
        <Menu.Item key='5' style={menuItemStyle} icon={<ContactsOutlined />}>
          <Link to='/contact-us'>{t('menu.contact-us')}</Link>
        </Menu.Item>
        {/* <Menu.Item key='4' style={menuItemStyle} icon={<UserAddOutlined />}>
          <Link to='/register'>{t('LeftDiv.signIn')}</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  )
}

export default MainMenu
