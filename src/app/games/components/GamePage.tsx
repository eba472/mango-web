import { Button } from 'antd'
import React from 'react'

const GamePage = () => {
 
  return (
      <>
        <h1  style={{ color:'black', padding:'2.5%' }}>What game do you want to play?</h1>
        <div className='container' style={{ width:'100%', height:'700px', backgroundColor:'grey', textAlign:'center' }}>
            <div className='game' >
                    <div  style={{ width:'13%', backgroundColor:'brown', margin:'10px' }}>
                        Snake
                    </div>
                    <img
                    src='./snake.png'
                    alt='imgLogo'
                    style={{ width: '13%', height: '130px', marginLeft:'0px'}}
                    ></img>
                    <Button  style={{ width:'13%', backgroundColor:'green' }}>
                        Play now
                    </Button>
                </div>
                <div className='game' ></div>
                <div className='game' ></div>
        </div>
    </>
  )
}

export default GamePage