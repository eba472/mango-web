import React from 'react'
import { useTranslation } from 'react-i18next'
import Search from 'antd/lib/input/Search'

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
      style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
    >
      <Search
        addonBefore='Search word: '
        placeholder={t('SearchComponent.inputSearchWord')}
        allowClear
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: 304, padding: 20 }}
        size='large'
      />
    </div>
  )
}

export default SearchComponent
