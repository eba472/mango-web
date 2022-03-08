import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const eachGameStyle: CSSProperties = {
  width: '1000px',
  margin: '30px auto',
  backgroundColor: '#ECECEC',
  height: 'auto',
  padding: '10px',

}
const eachP: CSSProperties = {
  marginLeft:'50px'
}
const Rule = () => {
  return (
      <>
      <h1 style={{ textAlign:'center', padding:'23px 0px 13px 0px' }}>Game rules</h1>
      <div >
        <div style={eachGameStyle}>
          <h3 style={{ backgroundColor:'white' }}>Win Rule</h3>
          <p style={eachP}>1. if you reach the end, you will win.</p>
        </div>
        <div style={eachGameStyle}>
          <h3 style={{ backgroundColor:'white' }}>Question rule: </h3>
           <p style={eachP}>1. if you face “ ! “ , you have to answer question to pass.</p>
           <p style={eachP}>2. You have 3 chances to answer per question.</p>
           <p style={eachP}>3. you will lose if you can't answer a question after 3 tries.</p>

        </div>
        <div style={eachGameStyle}>
        <h3 style={{ backgroundColor:'white' }}>How to play</h3>
          <p style={eachP}>1. Play with arrow buttons.</p>
          <p style={eachP}>2. You will move according to arrow directions.</p>
          <img src='../snake.png' alt='arrowbutton'></img>
        </div>
      </div>
      <Link to='play'>
            <h1 style={{ color:'green', textAlign:'center' }}>Let's Play!</h1>
        </Link>
      </>
    
  )
}

export default Rule