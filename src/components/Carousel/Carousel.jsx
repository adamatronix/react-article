import React from 'react';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';

const Carousel = (props) => {

  const { children } = props;

  return (
    <>
      <SlippinCarousel>
        {children}
      </SlippinCarousel>
    </>
  )
}

export default Carousel;