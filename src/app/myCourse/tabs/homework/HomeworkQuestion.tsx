import React, { useState } from 'react'
import { Modal, Button, Form } from 'antd';
import { Radio } from 'antd';



const HomeworkQuestion = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numCorrectQuestion, setNumCorrectQuestion] = useState(0);
  



  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('values', values)
        form.resetFields()
        if (value===questions[currentQuestion].correctAnswer) {
          setNumCorrectQuestion(numCorrectQuestion+1)
        } 

      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
      if (currentQuestion<2){
        setCurrentQuestion(currentQuestion + 1)
      }
      
      if (currentQuestion === questions.length - 1){
        setIsModalVisible(false);
        if (value===questions[currentQuestion].correctAnswer) {
          alert(`You answered  ${numCorrectQuestion + 1} questions succesfully. Congratulations!`)
        } else {
          alert(`You answered  ${numCorrectQuestion} questions succesfully. Congratulations!`)
        }
        
      }
      
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const questions = [
    {
      question: "1. ___ you like some coffee? No, thank you.",
      answers: ["Can", "Would", "Could", "Would"],
      correctAnswer: 2
    },
    {
      question: " What ___ weather we had yesterday!",
      answers: ["lovely", "a lovely", "some lovely", " any lovely",],
      correctAnswer: 2
    },
    {
      question: " I ___ my hair when the doorbell rang.",
      answers: ["washed", "was washing", "am washing", "have washed",],
      correctAnswer: 2
    }
  ]
  const [form] = Form.useForm()

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Home work
      </Button>
      <Modal title="Question" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <Form
        form={form}>
          <Form.Item
            name='question'>
            <h2>{questions[currentQuestion].question}</h2>
          </Form.Item >
          <Form.Item
            name='answer'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}> {questions[currentQuestion].answers[0]}</Radio>
              <Radio value={2}> {questions[currentQuestion].answers[1]}</Radio>
              <Radio value={3}> {questions[currentQuestion].answers[2]}</Radio>
              <Radio value={4}> {questions[currentQuestion].answers[3]}</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default HomeworkQuestion