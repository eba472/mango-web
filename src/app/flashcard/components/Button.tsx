import React from 'react'
import { useTranslation } from 'react-i18next'

const Button = ( props: any ) => {

  const { t } = useTranslation('common')
  let button = (
    <div>
      <button onClick={() => props.setIndex(props.index+1)} >{t('Flashcard.nextButton')}</button>
      <button onClick={() => props.setIndex(props.index-1)} >{t('Flashcard.prevButton')}</button>
    </div>
  )
  if ( props.index === 0 ) {
    button = (
        <button onClick={() => props.setIndex(props.index+1)} >{t('Flashcard.nextButton')}</button>
    )
  } else if ( props.index >= props.dataLength ) {
    button = (
      <button onClick={() => props.setIndex(props.index-1)} >{t('Flashcard.prevButton')}</button>
    )
  }
  return (
    <div>
      { button }
    </div>
  )
}

export default Button