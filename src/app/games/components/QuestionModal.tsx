import React from 'react'
import '../main.css'
import $ from 'jquery'
import { Form, Radio } from 'antd'

const Games = () => {
  function closeModalBox() {
    $('#modal-container').addClass('out')
    $('body').removeClass('modal-active')
  }

  function openModalBox() {
    $('#modal-container').removeAttr('class').addClass('four')
    $('body').addClass('modal-active')
  }

  const questionsArray = [
    {
      question: 'What is this animal?',
      imageLoc: '/camel.png',
      answers: ['Fish', 'Camel', 'Horse', 'Car'],
      correctAnswer: 'Camel',
    },
    {
      question: 'What is this?',
      imageLoc: '/car.png',
      answers: ['Food', 'Computer', 'Pencil', 'Car'],
      correctAnswer: 'Car',
    },
  ]
  const questionNumber = 1
  const currQ = questionsArray[questionNumber]
  return (
    <>
      <div id='modal-container'>
        <div className='modal-background'>
          <div className='modal'>
            <div onClick={closeModalBox}>Cancel</div>
            <img
              src={currQ.imageLoc}
              alt='imgLogo'
              style={{ width: '200px', height: '200px', padding: 20 }}
            ></img>
            <div style={{ padding: 20, borderTop: 'solid 1px black' }}>
              <h2>{currQ.question}</h2>
            </div>
            <Form onFinish={() => console.log('aaa')}>
              <Form.Item>
                <Radio.Group>
                  <Radio value={currQ.answers[0]}>{currQ.answers[0]}</Radio>
                  <Radio value={currQ.answers[1]}>{currQ.answers[1]}</Radio>
                  <Radio value={currQ.answers[2]}>{currQ.answers[2]}</Radio>
                  <Radio value={currQ.answers[3]}>{currQ.answers[3]}</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className='content'>
        <h1>Modal Animations</h1>
        <div className='buttons'>
          <div id='four' className='button' onClick={openModalBox}>
            Blow Up
          </div>
        </div>
      </div>
    </>
  )
}

export default Games
