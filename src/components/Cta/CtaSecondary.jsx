import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import { ReactComponent as ArrowIcon} from './assets/Manual_MontrealArrow.svg';
import * as styles from './styles/cta.module.scss';

const CtaSecondary = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <button className={cx(styles.button, styles.buttonSecondary, {[styles.buttonDesktop]: isDesktop})}>
      { children }
      <ArrowIcon className={styles.secondaryArrow}/>
    </button>
  )
}

export default CtaSecondary;