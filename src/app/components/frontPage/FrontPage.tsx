import React from 'react'
import './FrontPage.css'

const imagesSources = [
  { img: '/FrontImg/intro.png' },
  { img: '/FrontImg/forStudent.png' },
  { img: '/FrontImg/ForTeacher.png' },
  { img: '/FrontImg/whyA+.png' },
]
const delay = 2500

function FrontPage() {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef<any>(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesSources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imagesSources.map((imagesSource, index) => (
          <img src={imagesSource.img} alt="img" className="slide" key={index} />
        ))}
      </div>

      <div className="slideshowDots">
        {imagesSources.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
export default FrontPage
