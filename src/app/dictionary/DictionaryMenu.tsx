import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Dictionary from './tabs/dictionary/Dictionary'
import Translation from './tabs/Translation'
import Grammar from './tabs/Grammar'
import Flashcard from './tabs/flashcard/Flashcard'
const DictionaryMenu = () => {
  const { t } = useTranslation('common')
  const [current, setCurrent] = useState('dictionary')
  const handleClick = (e: any) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        defaultOpenKeys = {['dictionary']}
        mode='horizontal'
        style={{
          margin: '50px 0px 40px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Menu.Item key='dictionary'>
          <Link to={`dictionary`}>{t('menu.dictionary')}</Link>
        </Menu.Item>
        <Menu.Item key='sentenceTranslation'>
          <Link to={`translation`}>{t('menu.translation')}</Link>
        </Menu.Item>
        <Menu.Item key='flashcard'>
          <Link to={`flashcard`}>{t('menu.flashcard')}</Link>
        </Menu.Item>
        <Menu.Item key='grammar'>
          <Link to={`grammar`}>{t('menu.grammar')}</Link>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path={`dictionary`} element={<Dictionary />} />
        <Route path={`translation`} element={<Translation />} />
        <Route path={`flashcard`} element={<Flashcard />} />
        <Route path={`grammar`} element={<Grammar />} />
      </Routes>
    </>
  )
}

export default DictionaryMenu
