import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Signup = () => {
  const onFinish = (values=String) => {
    console.log("Success:", values);
  };

  

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width:'35%', alignItems:'center' }}
     
    >
        <div style={{ fontSize:'28px', color:'#e76f51', padding:'20px' }}>
            Sign up
        </div>

        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
        
      >
        <Button type="primary" htmlType="submit" style={{ border:'1px solid #e76f51', backgroundColor:'#fff', color:'#e76f51', width:'80%' }}>
          Sign up with Google
        </Button>
      </Form.Item>
      
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
     
      >
        <Input    style={{ border:'1px solid #e76f51' }}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!"
          }
        ]}
      >
        <Input    style={{ border:'1px solid #e76f51' }}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password  style={{ border:'1px solid #e76f51' }}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Checkbox >I agree with terms and legacy.</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
        
      >
        <Button type="primary" htmlType="submit"    style={{ border:'1px solid #e76f51', backgroundColor:'#e76f51', width:'60%' }}>
          Sign up
        </Button>
      </Form.Item>
      <div style={{ fontSize:'15px', marginLeft:'47%' }}>
          Already have a account?
      </div>
        <Link to='./login' style={{ marginLeft:'60%' }}>
            Log in
        </Link>
    </Form>

  );
};
export default Signup


