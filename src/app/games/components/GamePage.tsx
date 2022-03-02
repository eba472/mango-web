import { Button } from 'antd'
import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const containerStyle: CSSProperties = {
  width: '98%%',
  height: '700px',
  backgroundColor: 'white',
  border: '1px solid black',
  margin: '20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
}

const eachGameStyle: CSSProperties = {
  width: '500px',
  margin: '10px',
  backgroundColor: '#ECECEC',
  height: '300px',
  padding: '10px',
}
const eachName: CSSProperties = {
  width:'200px',
  height:'50px',
  backgroundColor:'green',
  margin:'0px auto',
  paddingTop:'6px',
  color:'white'
}
const GamePage = () => {
  return (
    <>
      <h1 style={{ color: 'black', padding:'18px 0px', textAlign:'center' }}>
        What game do you want to play?
      </h1>
      <div className='container' style={containerStyle}>
        <div style={eachGameStyle}>
          <h2 style={eachName}>Snake</h2>
          <img
            src='./snake.png'
            alt='imgLogo'
            style={{ width: '200px', height: '200px' }}
          ></img>

          <Link to='snake'>
            <h2 style={ eachName }>Play!</h2>
          </Link>
        </div>
        <div style={eachGameStyle}></div>
        <div style={eachGameStyle}></div>
      </div>
    </>
  )
}

export default GamePage
