import { Form, Radio } from 'antd';
import React from 'react'

const Question1: React.FC = () => {   //Functional component

  const [value, setValue] = React.useState(null);
  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  return (
    <>
      <img
        src='/camel.png'
        alt='imgLogo'
        style={{ width: '200px', height: '200px', margin: '1px 120px' }}
      ></img>
      <h1 style={{ textAlign: 'center', marginTop: '14px' }}> What is the animal?</h1>
      <Form >
        <Form.Item>
          <Radio.Group onChange={onChange} value={value} >
            <Radio value={'aaaaaa'}>Aaaa</Radio>
            <Radio value={'bbbbbb'}>B</Radio>
            <Radio value={'cccccc'}>C</Radio>
            <Radio value={'dddddd'}>D</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export default Question1