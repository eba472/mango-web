import React from 'react'
import './main.css'
import $ from 'jquery'

const Games = () => {

  function onClick(){
    $('#modal-container').addClass('out')
    $('body').removeClass('modal-active')
  }
  function onClick1() {
    $('#modal-container').removeAttr('class').addClass('four')
    $('body').addClass('modal-active')
  }
  return (
    <>
      <div id='modal-container' onClick={onClick}>
        <div className='modal-background'>
          <div className='modal'>
            <h2>🐫</h2>
            <p>what is this animal?</p>
            <p>A. Fish</p>
            <p>B. Camel</p>
            <p>C. Horse</p>
            <p>D. Car</p>
          </div>
        </div>
      </div>
      <div className='content'>
        <h1>Modal Animations</h1>
        <div className='buttons'>
          <div id='four' className='button' onClick={onClick1}>
            Blow Up
          </div>
        </div>
      </div>
    </>
  )
}

export default Games
