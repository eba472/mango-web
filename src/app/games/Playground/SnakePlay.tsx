import React, { CSSProperties } from 'react'
import './PlayGround.css'

const containerStyle: CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',

}
const gameBoard: CSSProperties = {
  backgroundColor: 'white',
  width: '1050px',
  height: '280px',
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(15, 1fr)',
}

const gamemap = [[0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 1, 1, 1, 0],
[0, 1, 3, 1, 0, 0, 1, 0, 1, 1, 0, 3, 0, 1, 5],
[0, 1, 0, 1, 0, 1, 3, 0, 0, 1, 1, 1, 0, 0, 0],
[4, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
const SnakePlay = () => {
  return (
    <>
      <div style={containerStyle}>
        <div style={gameBoard}>

          
          <img
              src='./human.png'
              alt='player'
              style={{ width: '50px', height: '50px', position: 'absolute', left: '200px', top: '540px', zIndex: '1' }}
            ></img>

          {gamemap.map(eachRow => eachRow.map(eachGrid => {
            if (eachGrid === 0) {
              return <div className='normalBlock'></div>
            } else if (eachGrid === 1) {
              return <div className='roadBlock'></div>
            } else if (eachGrid === 3) {
              return <div className='questionBlock'></div>
            } else if (eachGrid === 4) {
              return <div className='endStartBlock'>START</div>
            } else if (eachGrid === 5) {
              return <div className='endStartBlock' >END</div>
            } else {
              return <div ></div>
            }
          }))}


        </div>
      </div>
    </>
  )
}

export default SnakePlay