import React from 'react'
import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ColumnType } from 'antd/lib/table';
import { LockOutlined } from '@ant-design/icons';
import HomeworkModal from './HomeworkModal';

const data = [
  {
    key: '1',
    name: 'Exam1',
    Result: 32,
    Date: 'Feb 23, 2022',
    Exam_paper: '#',
  },
  {
    key: '2',
    name: 'Exam2',
    Result: 42,
    Date: 'Feb 23, 2022',
    Exam_paper: 'click here',
  },
  {
    key: '3',
    name: 'Exam3',
    Result: 32,
    Date: 'Dec 23, 2022',
    Exam_paper: 'click here',
  },
];
const columns: ColumnType<object>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => {
      return <HomeworkModal/>
      // <Link to={`/myCourse/Exam/${name}`} >{name}</Link>
    },
  },
  {
    title: 'Result',
    dataIndex: 'Result',
    key: 'Result',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Date',
  },
  {
    title: 'Exam_paper',
    key: 'Exam_paper',
    dataIndex: 'Exam_paper',
    render: (record: any) => (
      <Space size="middle">
        <a href="URL"><LockOutlined /></a>
      </Space>

    ),
  },
  {
    title: 'Explanation',
    key: 'action',
    render: (record: any) => (
      <Space size="middle">
        <a href="URL" ><LockOutlined /> </a>
      </Space>
    ),
  },
];

const Homework = () => {

  return <div>
    <Table columns={columns} dataSource={data} style={{ width: '900px', backgroundColor: '#4E89AE' }} />
    
  </div>
}

export default Homework
