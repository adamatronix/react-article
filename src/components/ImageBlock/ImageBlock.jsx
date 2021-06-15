import React from 'react';
import { LazyBlurImage } from '@manualengineering/react-lazyblur';
import * as styles from './styles/image-block.module.scss';

const ImageBlock = (props) => {

  const { placeholder, src, alt, caption, style, className } = props;
  return (
    <div style={style} className={className}>
      { placeholder && src ? <LazyBlurImage className={styles.lazyimage} placeholder={placeholder} src={src} alt={alt}/> : src ?
      <img className={styles.image} src={src} alt={alt} /> : <div className={styles.box}></div> }
      { caption ? <div className={styles.caption}>{caption}</div> : ''}
    </div>
  )
}

export default ImageBlock;