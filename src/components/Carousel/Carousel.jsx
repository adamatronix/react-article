import React from 'react';
import cx from 'classnames/bind';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';

const Item = styled.div` 
  margin: 0 0 0 15px;
  ${({ desktop }) => desktop && `
    margin: 0 0 0 30px;
  `}
`

const Carousel = (props) => {
  const { children, ...rest } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const getItems = (items) => {
    return items.map((child,index) => {

      return (
        <Item desktop={isDesktop}>
          { child }
        </Item>
      )
    })
  }

  const allItems = getItems(children);

  return (
    <Section full>
      <SlippinCarousel itemSize={ isDesktop ? '55%' : '90%'} {...rest}>
        {allItems ? allItems : ''}
      </SlippinCarousel>
    </Section>
  )
}

export default Carousel;