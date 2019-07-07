import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const SlideBox = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div>
      <AliceCarousel
        dotsDisabled
        mouseDragEnabled
        autoPlay
        autoPlayInterval={4000}
        duration={1000}
        responsive={{
          0: {
            items: 1,
          },
          1023: {
            items: 4,
          },
        }}
        // stagePadding={{
        //   paddingLeft: 10,
        //   paddingRight: 10,
        // }}
      >
        <div style={{ margin: '15px' }}>
          <img
            src='./static/images/bride.jpg'
            onDragStart={handleOnDragStart}
            className='yours-custom-class'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <img
            src='./static/images/bride.jpg'
            onDragStart={handleOnDragStart}
            className='yours-custom-class'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <img
            src='./static/images/bride.jpg'
            onDragStart={handleOnDragStart}
            className='yours-custom-class'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <img
            src='./static/images/bride.jpg'
            onDragStart={handleOnDragStart}
            className='yours-custom-class'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <img
            src='./static/images/bride.jpg'
            onDragStart={handleOnDragStart}
            className='yours-custom-class'
            style={{ width: '100%' }}
          />
        </div>
      </AliceCarousel>
    </div>
  )
}

export default SlideBox
