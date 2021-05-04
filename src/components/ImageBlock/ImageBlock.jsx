import React from 'react';
import { LazyBlurImage } from '@manualengineering/react-lazyblur';
import styles from './styles/image-block.module.scss';

const ImageBlock = (props) => {

  const { placeholder, src, alt, caption } = props;
  return (
    <div>
      { placeholder ? <LazyBlurImage placeholder={placeholder} src={src} alt={alt}/> :
      <img className={styles.image} src={src} alt={alt} /> }
      { caption ? <div className={styles.caption}>{caption}</div> : ''}
    </div>
  )
}

export default ImageBlock;