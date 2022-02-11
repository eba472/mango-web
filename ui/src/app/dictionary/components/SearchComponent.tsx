import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const SearchComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'40px' }} >
      <div style={{ height: '32px', width:'100px', backgroundColor:'#e76f51', color:' white', textAlign:'center' }}>
        Dictionary
      </div>
      <div>
      <Space direction="vertical" style={{ width:'550px' }} >
        <Search style={{ borderRadius:'20%' }}
          placeholder="input search word"
          onSearch={onSearch}
          enterButton  
        />
      </Space>
      </div>
    </div>
  );
};

export default SearchComponent;
