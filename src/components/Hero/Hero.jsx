import React from 'react';
import styles from './styles/hero.module.scss';

const Hero = (props) => {

  const { src } = props;

  const imageStyles = {
    background: `url(${src}) center center no-repeat`,
    backgroundSize: 'cover'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <div className={styles.image} style={imageStyles} ></div>
      </div>
    </div>
  );
}

export default Hero;