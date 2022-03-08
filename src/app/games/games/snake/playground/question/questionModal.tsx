import { Form, Modal } from 'antd'
import Question1 from './question1'
import React, { useState } from 'react'

interface Values {
  title: string
  description: string
  modifier: string
}

interface CollectCreateFormProps {
  visible: boolean
  QuestionOn: (values: Values) => void
  onCancel: () => void
}

const QuestionModal: React.FC<CollectCreateFormProps> = ({
  visible,
  QuestionOn,
  onCancel,
}) => {
  const [form] = Form.useForm()


  return (
    <Modal
      visible={visible}
      title='Question'
      okText='Send Answer'
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={(e) => {
        console.log(e)

      }
      }
    >

      <Question1 />
    </Modal >
  )
}

export default QuestionModal