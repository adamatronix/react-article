import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../utils/useWindowSize';
import { media } from 'utils/mediaQuery';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';

const Carousel = (props) => {
  const { children, ...rest } = props;
  const [width, height] = useWindowSize();

  const getItems = (items) => {
    return items.map((child,index) => {
      return (
        <Item>
          { child }
        </Item>
      )
    })
  }

  return (
    <Section full>
      <SlippinCarousel itemSize={ width > 768 ? '55%' : '90%'} {...rest}>
        {children}
      </SlippinCarousel>
    </Section>
  )
}

export default Carousel;


const Item = styled.div` 
  margin: 0 0 0 15px;

  ${media.small`
    margin: 0 0 0 30px;
  `}
`

const CarouselItem = ({children}) => {

  return (
    <Item>
      {children}
    </Item>
  )
}

export { CarouselItem }