import { Button, Collapse } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const { Panel } = Collapse

const Meanings = ({ meanings, callback }: { meanings: any; callback: any }) => {
  const { t } = useTranslation('common')
  console.log('meaning, callbackd :>> ', meanings, callback)
  return (
    <div>
      {meanings &&
        meanings.length > 0 &&
        meanings?.map((meaning: any) => {
          console.log('1 :>> ', 1)
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
                        <h3>
                          {t('Dictionary.definition')}: {def.definition}
                        </h3>
                        <p>
                          {t('Dictionary.exampleSentence')}: {def.example}
                        </p>
                      </div>
                    )
                  })}
                  <div>
                    {meaning?.synonyms && (
                      <>
                        <p>{t('Dictionary.synonyms')}</p>
                        <div>
                          {meaning.synonyms.map((synonym: any) => {
                            return <Button>{synonym}</Button>
                          })}
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    {meaning?.antonyms && (
                      <>
                        <p>{t('Dictionary.antonyms')}</p>
                        <div>
                          {meaning.antonyms.map((antonym: any) => {
                            return <Button>{antonym}</Button>
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Panel>
            </Collapse>
          )
        })}
    </div>
  )
}
export default Meanings
