import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
const containerStyle: CSSProperties = {
  width: '98%',
  height: '700px',
  backgroundColor: 'white',
  border: '1px solid black',
  margin: '20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
}

const eachGameStyle: CSSProperties = {
  width: '500px',
  margin: '20px',
  backgroundColor: '#ECECEC',
  height: '300px',
  padding: '10px',
}
// const gameImage: {
//   <img
//   src='../snake.png'
//   alt='imgLogo'
//   style={{ width: '200px', height: '200px' }}
// ></img>
// }
const ChooseLevel = () => {
  return (
    <>
    <h1 style={{ textAlign:'center', padding:'23px 0px 13px 0px' }}>Choose level</h1>
    <div className='container' style={containerStyle}>
        <div style={eachGameStyle}>
          <h2>Level 1</h2>
          <img
            src='../snake.png'
            alt='imgLogo'
            style={{ width: '200px', height: '200px' }}
          ></img>

          <Link to='level1'>
            <h2 style={{ color:'green', paddingTop:'7px' }}>Play!</h2>
          </Link>
        </div>
        <div style={eachGameStyle}>
        <h2>Level 2</h2>
          <img
            src='../snake.png'
            alt='imgLogo'
            style={{ width: '200px', height: '200px' }}
          ></img>

          <Link to='snake'>
            <h2 style={{ color:'green', paddingTop:'7px' }}>Play!</h2>
          </Link>
        </div>
        <div style={eachGameStyle}>
        <h2>Level 3</h2>
          <img
            src='../snake.png'
            alt='imgLogo'
            style={{ width: '200px', height: '200px' }}
          ></img>

          <Link to='snake'>
            <h2 style={{ color:'green' }}>Play!</h2>
          </Link>
        </div>
        <div style={eachGameStyle}>
        <h2>Level 4</h2>
          <img
            src='../snake.png'
            alt='imgLogo'
            style={{ width: '200px', height: '200px' }}
          ></img>

          <Link to='snake'>
            <h2 style={{ color:'green' }}>Play!</h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ChooseLevel