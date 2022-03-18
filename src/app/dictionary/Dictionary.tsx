import React, { useEffect, useState } from 'react'
import SearchComponent from './components/SearchComponent'
import axios from 'axios'
import { Button, Collapse } from 'antd'
import { useTranslation } from 'react-i18next'

import PlayAudio from './components/PlayAudio'
const { Panel } = Collapse

interface Phonetictype {
  text: string
  audio?: string
}
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
  console.log('data', wordInfo)
  function callback(key: any) {
    console.log(key)
  }

  function arrToString(arr: string[]) {
    let ans = ''
    for (let i = 0; i < arr.length; i++) {
      ans += arr[i]
    }
    return ans
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
            <p style={{ fontWeight: 'bold', fontSize: '36px', color: '#1d2a57', marginBottom: '20px' }}> {wordInfo?.word}</p>
            {/* Pronunciations:{' '} */}
            {wordInfo?.phonetics.map((phonetic: Phonetictype) => {
              console.log('phonetic?.url', phonetic?.audio)
              return <>
                <Button>{phonetic.text}</Button>
                {phonetic?.audio && <PlayAudio url={phonetic.audio} />}
              </>
            })}
            <p>{wordInfo?.origin}</p>
            <div>
              {wordInfo?.meanings.map((meaning: any) => {
                return (
                  <Collapse
                    defaultActiveKey={['1']}
                    onChange={callback}
                    style={{ padding: '20px' }}
                  >
                    <Panel header={meaning.partOfSpeech} key='1'>
                      <div>
                        {meaning.definitions.map((def: any) => {
                          return (
                            <div>
                              <h3>{t('Dictionary.definition')}: {def.definition}</h3>
                              <p>{t('Dictionary.exampleSentence')}: {def.example}</p>
                              <p>
                                {def.synonyms &&
                                  t('Dictionary.synonyms') + '' + arrToString(def.antonyms)}
                              </p>
                              <p>
                                {def.antonyms &&
                                  t('Dictionary.antonyms') + '' + arrToString(def.antonyms)}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </Panel>
                  </Collapse>
                )
              })}
            </div>
          </Panel>
        </Collapse>
      )
      }
    </div >
  )
}

export default Dictionary
