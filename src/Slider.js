import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

let count = 0
let slideInterval

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideRef = useRef()

  const handleOnNextClick = () => {
    count = (count + 1 ) % images.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  const handleOnPrevClick = () => {
    const productsLength = images.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 5000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    startSlider()

    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)
  }, [])

  return (
    <div className="max-w-full m-auto">
      <div ref={slideRef} className="w-full relative select-none">
        <div className="aspect-w-16 aspect-h-8">
          <img src={images[currentIndex]} alt="" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button 
            className="px-4 py-2 bg-white rounded-full"
            onClick={ () => handleOnPrevClick() }>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button 
            className="px-4 py-2 bg-white rounded-full"
            onClick={ () => handleOnNextClick() }>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Slider;