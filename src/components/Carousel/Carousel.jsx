import React from 'react';
import cx from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';
import { SlippinCarousel } from '@manualengineering/react-slippin-carousel';
import Section from '../Section/Section';
import * as styles from './styles/carousel.module.scss';

const Carousel = (props) => {
  const { children, ...rest } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  const getItems = (items) => {
    return items.map((child,index) => {

      return (
        <div className={cx(styles.item, {[styles.itemDesktop]: isDesktop})}>
          { child }
        </div>
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