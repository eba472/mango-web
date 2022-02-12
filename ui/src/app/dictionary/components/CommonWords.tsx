import React, { CSSProperties } from 'react'

const wordStyle: CSSProperties = {
  backgroundColor: 'white',
  height: '30px',
  textAlign: 'center',
  marginTop: '10px',
  padding: '5px',
}

const CommonWords = () => {
  const commonWords = [
    'mango',
    'food',
    'eat',
    'desk',
    'United States of America',
  ]
  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#e76f51',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {commonWords.map((word) => {
        return <div style={wordStyle}>{word}</div>
      })}
      <div />
    </div>
  )
}

export default CommonWords
