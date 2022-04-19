import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../utils/useWindowSize';
import { media } from 'utils/mediaQuery';
import { SlippinCarousel, SlippingCarouseItem } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';
import { fontstack } from 'utils/fontstack';

const ClickComponent = styled.div`
  ${fontstack.default}
  font-size: 24px;
  line-height: 32px;
`

const Carousel = (props) => {
  const { children, ...rest } = props;
  const [width, height] = useWindowSize();

  return (
    <>
    {width ?
      <Section full>
        <SlippinCarousel 
          itemSize={ width > 768 ? '55%' : '90%'}  
          clickable={width > 768 ? true : false}
          clickableNextLabel={<ClickComponent>(Next, →)</ClickComponent>} 
          clickablePrevLabel={<ClickComponent>(↙, Previous)</ClickComponent>} {...rest}>
          {children}
        </SlippinCarousel>
      </Section>
     : null}
  </>
  )
}

export default Carousel;


const Item = styled.div` 
  margin: 0 0 0 15px;

  ${media.small`
    margin: 0 0 0 30px;
  `}
`

const CarouselItem = ({children, ...rest}) => {

  return (
    <SlippingCarouseItem {...rest}>
      <Item>
        {children}
      </Item>
    </SlippingCarouseItem>
  )
}

export { CarouselItem }