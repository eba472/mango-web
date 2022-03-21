import { Button, Form, Modal } from 'antd';
import React, { useState } from 'react';

export default function HomeworkModal() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  const [isModalVisible, setIsModalVisible] = React.useState(false)
  
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)

    // form
    //   .validateFields()
    //   .then((values) => {
    //     form.resetFields()
    //     setIsModalVisible(true)
    //   })
    //   .catch((info) => {
    //     console.log('Validate Failed:', info)
    //   })
    
  }
    const handleCancel = () => {
      setIsModalVisible(false)
    }
  
    const [form] = Form.useForm()
  
	return (
		<div className='app'>

      <Button type="primary" onClick={showModal}>
      Home work 1
      </Button>
      <Modal
        title= {<h3><span>Question {currentQuestion + 1}</span>/{questions.length}</h3> }
        visible={isModalVisible}
        onOk={handleOk }
        onCancel={handleCancel}
        okText="Out"
      >
        <Form form={form}>

          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <Form.Item style={{ textAlign:'center' }}>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </Form.Item>
              <Form.Item>
              <div className='answer-section'  style={{ display:'flex', justifyContent:'space-around' }}>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <Button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                ))}
              </div>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
		</div>
	)
  };
