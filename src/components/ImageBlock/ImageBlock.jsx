import React from 'react';
import styles from './styles/image-block.module.scss';

const ImageBlock = (props) => {

  const { src, alt, caption } = props;
  return (
    <div>
      <img className={styles.image} src={src} alt={alt} />
      { caption ? <div className={styles.caption}>{caption}</div> : ''}
    </div>
  )
}

export default ImageBlock;