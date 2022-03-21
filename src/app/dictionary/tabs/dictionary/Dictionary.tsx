import React, { useEffect, useState } from 'react'
import SearchComponent from '../../components/SearchComponent'
import axios from 'axios'
import { Collapse } from 'antd'
import { useTranslation } from 'react-i18next'
import Phonetics from './component/Phonetics'
import Meanings from './component/Meanings'
import DictionaryMain from './component/DictionaryMain'

const { Panel } = Collapse

const Dictionary = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [errorTitle, setErrorTitle] = useState<string>('')
  const [wordInfo, setWordInfo] = useState<any>()
  const { t } = useTranslation('common')
  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then((res) => {
        setWordInfo(res.data[0])
        setErrorTitle('')
      })
      .catch(function (error) {
        console.log(error.response)
        setErrorTitle(error.response.data.title)
      })
  }, [searchValue])

  function callback(key: any) {
    console.log(key)
  }

  return (
    <div>
      <SearchComponent
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      {errorTitle ? (
        <div>{errorTitle}</div>
      ) : (
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          style={{ padding: '20px ' }}
        >
          <Panel header={t('Dictionary.definition')} key='1'>
            <DictionaryMain word={wordInfo?.word} def={wordInfo?.meanings[0].definitions[0].definition} />
            <Phonetics phonetics={wordInfo?.phonetics} />
            <p>{wordInfo?.origin}</p>
            <Meanings meanings={wordInfo?.meanings} callback={callback} />
          </Panel>
        </Collapse>
      )}
    </div>
  )
}

export default Dictionary
