import React from 'react'

const FlashcardComponent = ( props : any ) => {

  let flashcard = props.flashcards[props.index]

    if ( props.showFront ) {
      var renderFlashcards = (
          <div className="card-front" id="front" onClick={() => props.setShowFront(!props.showFront)}>
            <p>{flashcard.word}</p>
            <br />
          </div>
          )
    } else {
      renderFlashcards = (
          <div className="card-back" id="back" onClick={() => props.setShowFront(!props.showFront)}>
            <p >
              {flashcard.englishMeaning}
              <br />
              {flashcard.mongolianMeaning}</p>
          </div>
          )
        }

    return (
      <div>
        { renderFlashcards }
      </div>
    )
}
export default FlashcardComponent
