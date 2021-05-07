import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import styles from './styles/section.module.scss';

const Section = (props) => {
  const { children, small, full, contain, className} = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const sectionClasses = cx(styles.default, className, {
    [styles['default--desktop']]: isDesktop,
    [styles.small]: small,
    [styles['small--desktop']]: small && isDesktop,
    [styles['gutter-30']]: !full && isDesktop,
    [styles['gutter-15']]: !full && !isDesktop,
    [styles['contain']]: contain
  })

  return (
    <div className={sectionClasses}>
      { children }
    </div>
  )
}

export default Section;