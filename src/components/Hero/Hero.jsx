import React from 'react';
import { LazyBackgroundBlur } from '@manualengineering/react-lazyblur';
import * as styles from './styles/hero.module.scss';

const Hero = (props) => {
  const { src, placeholder } = props;
  const imageStyles = {
    background: `url(${src}) center center no-repeat`,
    backgroundSize: 'cover'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        { placeholder ? <LazyBackgroundBlur src={src} placeholder={placeholder} />
          : <div className={styles.image} style={imageStyles} ></div> }
      </div>
    </div>
  );
}

export default Hero;