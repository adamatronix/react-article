import React from 'react';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';

const Carousel = (props) => {

  const { children, ...rest } = props;

  return (
    <>
      <SlippinCarousel {...rest}>
        {children}
      </SlippinCarousel>
    </>
  )
}

export default Carousel;