import { Input, Space } from 'antd';

const Search = () => {
    
  return <div>
       <Space direction="vertical">
              <Search placeholder="input search word" onSearch={onSearch} enterButton />
            </Space>,
  </div>;
};

export default Search;
