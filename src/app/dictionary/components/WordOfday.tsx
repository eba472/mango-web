import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const WordOfday = () => {
  const { t } = useTranslation('common')
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: '#e76f51',
        borderRadius: '48%',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          color: '#264653',
          paddingTop: '35px',
          fontWeight: 'bold',
        }}
      >
        Word of the day
      </div>
      <div style={{ fontSize: '60px', color: '#fff', fontWeight: 'bold' }}>
        Mango
      </div>
      <div style={{ fontSize: '15px', color: 'black' }}>[ Mango ]</div>
      <div style={{ color: '#264653', padding: '15px 0px' }}>
        <Link to='/dictionary/WordOfday'> see definiation and examples</Link>
      </div>
      <div style={{ color: 'black', fontWeight: 'bold' }}>Jeb 16, 2022</div>
    </div>
  )
}

export default WordOfday
