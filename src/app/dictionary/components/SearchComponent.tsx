import React from 'react'
import { Button, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { SearchOutlined } from '@ant-design/icons'

const SearchComponent = ({
  setSearchValue,
  searchValue,
}: {
  setSearchValue: any
  searchValue: string
}) => {
  const { t } = useTranslation('common')
  const onSearch = (searchValue: string) => console.log(searchValue)
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
    >
      <div
        style={{
          backgroundColor: '#e76f51',
          color: ' white',
          textAlign: 'center',
          fontSize: '30px',
          padding: '0px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {t('SearchComponent.dictionary')}
      </div>
      <Input
        placeholder={t('SearchComponent.inputSearchWord')}
        style={{ fontSize: '30px', width: '550px' }}
        onChange={(e) => setSearchValue(e.target.value)}
        defaultValue={searchValue}
      />
      <Button
        icon={<SearchOutlined />}
        style={{
          backgroundColor: '#e76f51',
          color: 'white',
          fontSize: '30px',
          height: '60px',
        }}
        onClick={() => onSearch(searchValue)}
      >
        {t('SearchComponent.search')}
      </Button>
    </div>
  )
}

export default SearchComponent
