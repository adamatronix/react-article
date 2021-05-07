import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import { ReactComponent as ArrowIcon} from './assets/Manual_MontrealArrow.svg';
import styles from './styles/cta.module.scss';

const CtaPrimary = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <button className={cx(styles.button, {[styles['button--desktop']]: isDesktop})}>
      { children }
      <ArrowIcon className={styles['primary-arrow']}/>
    </button>
  )
}

export { CtaPrimary };

const CtaSecondary = (props) => {
  const { children } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <button className={cx(styles.button, styles['button--secondary'], {[styles['button--desktop']]: isDesktop})}>
      { children }
      <ArrowIcon className={styles['secondary-arrow']}/>
    </button>
  )
}

export { CtaSecondary };