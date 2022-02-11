import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const SearchComponent = () => {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search word"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      ,
    </div>
  );
};

export default SearchComponent;
