import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../utils/useWindowSize';
import { media } from 'utils/mediaQuery';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';

const Item = styled.div` 
  margin: 0 0 0 15px;

  ${media.small`
    margin: 0 0 0 30px;
  `}
`

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
  const allItems = getItems(children);

  return (
    <Section full>
      <SlippinCarousel itemSize={ width > 768 ? '55%' : '90%'} {...rest}>
        {allItems ? allItems : ''}
      </SlippinCarousel>
    </Section>
  )
}

export default Carousel;