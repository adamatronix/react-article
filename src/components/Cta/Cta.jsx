import React from 'react';
import cx from 'classnames/bind';
import { ReactComponent as ArrowIcon} from './assets/Manual_MontrealArrow.svg';
import styles from './styles/cta.module.scss';

const CtaPrimary = (props) => {
  const { children } = props;

  return (
    <button className={styles.button}>
      { children }
      <ArrowIcon className={styles['primary-arrow']}/>
    </button>
  )
}

export { CtaPrimary };

const CtaSecondary = (props) => {
  const { children } = props;

  return (
    <button className={cx(styles.button, styles['button--secondary'])}>
      { children }
      <ArrowIcon className={styles['secondary-arrow']}/>
    </button>
  )
}

export { CtaSecondary };