import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';

const Test = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <div className={cx('what', {'hey': isDesktop})}>
      { children }
    </div>
  )
}

export default Test;