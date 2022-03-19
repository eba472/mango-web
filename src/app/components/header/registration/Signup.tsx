import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
interface SignupProps {
  setIsUser: (value: boolean) => void
}
const Signup: React.FC<SignupProps> = ({ setIsUser }) => {
  const onFinish = (values = String) => {
    console.log('Success:', values)
  }

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete='off'
      style={{ alignItems: 'center' }}
    >
      <div style={{ fontSize: '28px', color: '#e76f51', padding: '20px' }}>
        Sign up
      </div>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type='primary'
          htmlType='submit'
          style={{
            border: '1px solid #e76f51',
            backgroundColor: '#fff',
            color: '#e76f51',
            width: '80%',
          }}
        >
          Sign up with Google
        </Button>
      </Form.Item>

      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{ border: '1px solid #e76f51' }} />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input style={{ border: '1px solid #e76f51' }} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{ border: '1px solid #e76f51' }} />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>I agree with terms and legacy.</Checkbox>
      </Form.Item>

      <Button onClick={() => setIsUser(true)}>Already have an account?</Button>
    </Form>
  )
}
export default Signup
