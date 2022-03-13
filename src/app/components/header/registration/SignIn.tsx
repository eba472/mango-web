import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { Persistence } from '@firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDOpnWwgDajQaMpmncBUL0Rv5CcLMUsVkk",
  authDomain: "aplus-4ae14.firebaseapp.com",
  projectId: "aplus-4ae14",
  storageBucket: "aplus-4ae14.appspot.com",
  messagingSenderId: "1065455070773",
  appId: "1:1065455070773:web:5f16f442e1ed6b28becb7c",
  measurementId: "G-YZLRQ0WT1X"
})

const auth: any = firebase.auth();
const wrapperCol = {
  offset: 8,
  span: 10,
}
interface SignInProps {
  setIsUser: (value: boolean) => void
}
const SignIn: React.FC<SignInProps> = ({ setIsUser }) => {
  const onFinish = (values = String) => {
    console.log('Success:', values)
  }
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  const [user] = useAuthState(auth);
  console.log(`user`, user)
  return (
    <Form
      name='basic'
      wrapperCol={wrapperCol}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item wrapperCol={wrapperCol} >
        <Button
          type='primary'
          htmlType='submit'
          style={{
            width: '80%',
            border: '1px solid #e76f51',
            backgroundColor: '#fff',
            color: '#e76f51',
          }}
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Form.Item>

      <Form.Item
      
        label='Email' style={{ marginLeft:'30px' }}
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
        label='Password' style={{ marginLeft:'30px' }}
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
        wrapperCol={wrapperCol}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Link to='./forgotPassword' style={{ marginLeft: '30%', paddingBottom:'24px' }}>
        <Button>Forgot password?</Button>
      </Link>

      <Button onClick={() => setIsUser(false)} style={{ marginLeft: '25%' }}>Don't have an account?</Button>
    </Form>
  )
}
export default SignIn
