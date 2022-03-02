import { Button } from 'antd'
import React, { CSSProperties, useState } from 'react'
import './level1.css'

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

const gameMap = [
  [0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 3, 1, 0, 0, 1, 0, 1, 1, 0, 3, 0, 1, 5],
  [0, 1, 0, 1, 0, 1, 3, 0, 0, 1, 1, 1, 0, 0, 0],
  [4, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const initialGameMap = [
  [0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 3, 1, 0, 0, 1, 0, 1, 1, 0, 3, 0, 1, 5],
  [0, 1, 0, 1, 0, 1, 3, 0, 0, 1, 1, 1, 0, 0, 0],
  [4, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
  // const pathArr = [{ x: 3, y: 1 }, { x: 3, y: 2} , { x: 2, y: 2} ]

const SnakePlay = () => {
  const [currPoss, setCurrPoss] = useState({ x: 3, y: 1 })
  gameMap[currPoss['x']][currPoss['y']] = 6
  // pathArr[currPoss + 1]
  function changeLocation() {
    gameMap[currPoss['x']][currPoss['y']] =
      initialGameMap[currPoss['x']][currPoss['y']]
    setCurrPoss({ x: 3, y: currPoss['y'] + 1 })
  }

  return (
    <>
      <Button onClick={changeLocation}>Click here to move!</Button>
      <div style={containerStyle}>
        <div style={gameBoard}>
          {gameMap.map((eachRow) =>
            eachRow.map((eachGrid) => {
              if (eachGrid === 0) {
                return <div className='normalBlock'></div>
              } else if (eachGrid === 1) {
                return <div className='roadBlock'></div>
              } else if (eachGrid === 3) {
                return <div className='questionBlock'></div>
              } else if (eachGrid === 4) {
                return <div className='endStartBlock'>START</div>
              } else if (eachGrid === 5) {
                return <div className='endStartBlock'>END</div>
              } else if (eachGrid === 6) {
                return <div className='playerBlock'>😋</div>
              } else {
                return <div></div>
              }
            })
          )}
        </div>
      </div>
    </>
  )
}

export default SnakePlay
