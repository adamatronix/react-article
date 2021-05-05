import React from 'react';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';

const Carousel = (props) => {

  const { children, ...rest } = props;

  return (
    <Section full>
      <SlippinCarousel {...rest}>
        {children}
      </SlippinCarousel>
    </Section>
  )
}

export default Carousel;