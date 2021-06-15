import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import * as styles from './styles/section.module.scss';

const Section = (props) => {
  const { children, small, full, contain, className} = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const sectionClasses = cx(styles.standard, className, {
    [styles.standardDesktop]: isDesktop,
    [styles.small]: small,
    [styles.smallDesktop]: small && isDesktop,
    [styles.gutter30]: !full && isDesktop,
    [styles.gutter15]: !full && !isDesktop,
    [styles.contain]: contain
  })

  return (
    <div className={sectionClasses}>
      { children }
    </div>
  )
}

export default Section;