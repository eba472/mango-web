import React from 'react'
import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'Exam_Name',
    Duration: '32 min' ,
    Deadline: '2 days, 10 hours, 30 minutes, 10 seconds',
    Exam_paper: '#',
  },
  {
    key: '2',
    name: 'Exam_Name',
    Duration: '15 min',
    Deadline: 'Feb 23, 2022',
    Exam_paper: 'click here',
  },
  {
    key: '3',
    name: 'Exam_Name',
    Duration: '60 min',
    Deadline: 'Dec 23, 2021',
    Exam_paper: 'click here',
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render:( text: any) => <a>{text}</a>,
  },
  {
    title: 'Duration',
    dataIndex: 'Duration',
    key: 'Duration',
  },
  {
    title: 'Deadline',
    dataIndex: 'Deadline',
    key: 'Deadline',
  },
  {
    title: 'Exam_paper',
    key: 'Exam_paper',
    dataIndex: 'Exam_paper',
    render: ( record: any) => (
      <Space size="middle">
         <a href="URL"><LockOutlined /></a> 
      </Space>
      
    ),
    },
  {
    title: 'Explanation',
    key: 'action',
    render: ( record: any) => (
      <Space size="middle">
        <a><LockOutlined /> </a>
      </Space>
    ),
  },
];

const Quizzes = () => {
  return <div>
    <Table columns={columns} dataSource={data} style={{ width:'900px', backgroundColor:'#4E89AE'  }}/>
  </div>
}

export default Quizzes
