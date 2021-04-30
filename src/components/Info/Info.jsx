import React from 'react';
import styles from './styles/info.module.scss';

const Info = (props) => {

  const { title, role, type, date} = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} >{ title }</h2>
      <div className={styles.role}>{ role }</div>
      <div className={styles.type}>{ type }</div>
      <div className={styles.date}>{ date }</div>
    </div>
  );
}

export default Info;