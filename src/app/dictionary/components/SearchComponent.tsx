import React from 'react'
import { useTranslation } from 'react-i18next'
import Search from 'antd/lib/input/Search'
import './style.css'

const SearchComponent = ({
  setSearchValue,
  searchValue,
}: {
  setSearchValue: any
  searchValue: string
}) => {
  const { t } = useTranslation('common')
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', fontSize: '50px !important' }}
    >
      <Search
        addonBefore={t('SearchComponent.search')}
        placeholder={t('SearchComponent.inputSearchWord')}
        allowClear
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: 800, padding: 20 }}
      />
    </div>
  )
}

export default SearchComponent
