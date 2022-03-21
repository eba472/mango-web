import React from 'react'
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ColumnType } from 'antd/lib/table';
import { LockOutlined } from '@ant-design/icons';

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
      return <Link to={`/myCourse/Exam/${name}`} >{name}</Link>
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
        <a href="https://www.google.com/search?q=wikipedia&oq=wkife&aqs=chrome.1.69i57j0i10l9.4388j0j7&sourceid=chrome&ie=UTF-8" ><LockOutlined /></a>
      </Space>
    ),
  },
];

const Grades = () => {
  return <div>
    <Table columns={columns} dataSource={data} style={{ width: '900px', backgroundColor: '#4E89AE' }} />
  </div>
}

export default Grades
