import { Button } from 'antd'
import React, { CSSProperties, useState } from 'react'
import './level1.css'
import QuestionModal from './question/questionModal'


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
const pathArr = [{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 },
{ x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 1, y: 6 }, { x: 0, y: 6 }, { x: 0, y: 7 },
{ x: 0, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 2, y: 10 }, { x: 2, y: 11 }, { x: 1, y: 11 }, { x: 0, y: 11 },
{ x: 0, y: 12 }, { x: 0, y: 13 }, { x: 1, y: 13 }, { x: 1, y: 14 }]
const SnakePlay = () => {
  const [visible, setVisible] = useState(false)
  const [currPoss, setCurrPoss] = useState({ x: 3, y: 0 })

  const QuestionOn = (values: any) => {
    console.log('QuestionOn: ', values)
    setVisible(false)
  }

  gameMap[currPoss['x']][currPoss['y']] = 6
  
  let index = pathArr.indexOf(currPoss)

  function changeLocation() {
    
    gameMap[currPoss['x']][currPoss['y']] =
      initialGameMap[currPoss['x']][currPoss['y']]       
      const thisPos = pathArr[index + 1]
      setCurrPoss(thisPos)
    setVisible(initialGameMap[thisPos['x']][thisPos['y']] === 3)

  }


  return (
    <>
      <Button onClick={changeLocation}>Click here to move!</Button>
      <Button
        onClick={() => {
          setVisible(true)
        }}
        style={{
          color: 'blue',
        }}
      >Modal</Button>
      <QuestionModal
        visible={visible}
        QuestionOn={QuestionOn}
        onCancel={() => {
          setVisible(false)
        }}
      />
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
