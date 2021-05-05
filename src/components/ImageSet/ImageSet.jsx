import React from 'react';
import Grid from '@react-css/grid'
import ImageBlock from '../ImageBlock/ImageBlock';
import Section from '../Section/Section';
import styles from './styles/image-set.module.scss';

const Image50 = (props) => {
  const { src, placeholder, alt, caption } = props;
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='4 / span 6'>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </Grid.Item>
      </Grid>
    </Section>
  )
}

const Image90 = (props) => {
  const { src, placeholder, alt, caption } = props;
  return (
    <Section>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='1 / span 12'>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </Grid.Item>
      </Grid>
    </Section>
  )
}

const Image100 = (props) => {
  const { src, placeholder, alt, caption } = props;
  return (
    <Section full>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='1 / span 12'>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </Grid.Item>
      </Grid>
    </Section>
  )
}

export {
  Image50,
  Image90,
  Image100
}