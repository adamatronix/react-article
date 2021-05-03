import React from 'react';
import cx from 'classnames/bind';
import styles from './styles/section.module.scss';

const Section = (props) => {
  const { children, small, full, className} = props;

  const sectionClasses = cx(styles.default, className, {
    [styles.small]: small,
    [styles['gutter-30']]: !full
  })

  return (
    <div className={sectionClasses}>
      { children }
    </div>
  )
}

export default Section;