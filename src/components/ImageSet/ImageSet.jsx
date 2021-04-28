import React from 'react';
import Grid from '@react-css/grid'
import ImageBlock from '../ImageBlock/ImageBlock';
import Section from '../Section/Section';
import styles from './styles/image-set.module.scss';

const Image50 = (props) => {
  const { src, alt, caption } = props;
  return (
    <Section>
      <div className={styles['image-wrapper']}>
        <div className={styles['image-50']}>
          <ImageBlock src={src} caption={caption} alt={alt}/>
        </div>
      </div>
    </Section>
  )
}

const Image90 = (props) => {
  const { src, alt, caption } = props;
  return (
    <Section>
      <div className={styles['image-wrapper']}>
        <div className={styles['image-100']}>
          <ImageBlock src={src} caption={caption} alt={alt}/>
          </div>
      </div>
    </Section>
  )
}

const Image100 = (props) => {
  const { src, alt, caption } = props;
  return (
    <Section full>
      <div className={styles['image-wrapper']}>
        <div className={styles['image-100']}>
          <ImageBlock src={src} caption={caption} alt={alt}/>
          </div>
      </div>
    </Section>
  )
}

export {
  Image50,
  Image90,
  Image100
}