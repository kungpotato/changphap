import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const SlideBox = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div>
      <AliceCarousel
        mouseDragEnabled
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 3,
          },
        }}
      >
        <img
          src='./static/images/bride.jpg'
          onDragStart={handleOnDragStart}
          className='yours-custom-class'
        />
        <img
          src='./static/images/bride.jpg'
          onDragStart={handleOnDragStart}
          className='yours-custom-class'
        />
        <img
          src='./static/images/bride.jpg'
          onDragStart={handleOnDragStart}
          className='yours-custom-class'
        />
        <img
          src='./static/images/bride.jpg'
          onDragStart={handleOnDragStart}
          className='yours-custom-class'
        />
        <img
          src='./static/images/bride.jpg'
          onDragStart={handleOnDragStart}
          className='yours-custom-class'
        />
      </AliceCarousel>
    </div>
  )
}

export default SlideBox
