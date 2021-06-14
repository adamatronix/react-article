import React from 'react';
import Grid from '@react-css/grid'
import { useMediaQuery } from 'react-responsive';
import ImageBlock from '../ImageBlock/ImageBlock';
import Section from '../Section/Section';

const Image50 = (props) => {
  const { src, placeholder, alt, caption } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column={ isDesktop ? '4 / span 6' : '1 / span 12'}>
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