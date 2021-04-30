import React from 'react';
import cx from 'classnames/bind';
import styles from './styles/cta.module.scss';

const CtaPrimary = (props) => {
  const { children } = props;

  return (
    <button className={styles.button}>
      { children }
    </button>
  )
}

export { CtaPrimary };

const CtaSecondary = (props) => {
  const { children } = props;

  return (
    <button className={cx(styles.button, styles['button--secondary'])}>
      { children }
    </button>
  )
}

export { CtaSecondary };