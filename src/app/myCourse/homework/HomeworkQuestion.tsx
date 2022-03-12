import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { Radio } from 'antd';



const HomeworkQuestion = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [value, setValue] = React.useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const questions = [
    {
      question: "1. ___ you like some coffee? No, thank you.",
      answers: ["Can", "Would", "Could", "Would"],
      correctAnswer: "Would"
    },
    {
      question: " What ___ weather we had yesterday!",
      answers: ["lovely", "a lovely", "some lovely", " any lovely",],
      correctAnswer: "lovely"
    }
  ]
  let currentQuestion=0 
  return (
    <div>
        <Button type="primary" onClick={showModal}>
        Home work 
      </Button>
      <Modal title="Question" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <h2>{questions[currentQuestion].question}</h2>
      
        <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}> {questions[currentQuestion].answers[0]}</Radio>
      <Radio value={2}> {questions[currentQuestion].answers[1]}</Radio>
      <Radio value={3}> {questions[currentQuestion].answers[2]}</Radio>
      <Radio value={4}> {questions[currentQuestion].answers[3]}</Radio>
    </Radio.Group>
      </Modal>
    </div>
  )
}

export default HomeworkQuestion