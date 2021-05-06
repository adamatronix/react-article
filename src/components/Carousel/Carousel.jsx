import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';

const Carousel = (props) => {
  const { children, ...rest } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Section full>
      <SlippinCarousel itemSize={ isDesktop ? '55%' : '90%'} {...rest}>
        {children}
      </SlippinCarousel>
    </Section>
  )
}

export default Carousel;