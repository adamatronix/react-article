import React from 'react';
import cx from 'classnames/bind';  
import { useMediaQuery } from 'react-responsive';
import styles from './styles/info.module.scss';

const Info = (props) => {

  const { title, role, type, date} = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <div className={cx(styles.wrapper, {[styles['wrapper--desktop']]: isDesktop})}>
      <h2 className={styles.title} >{ title }</h2>
      <div className={styles.role}>{ role }</div>
      <div className={styles.type}>{ type }</div>
      <div className={styles.date}>{ date }</div>
    </div>
  );
}

export default Info;