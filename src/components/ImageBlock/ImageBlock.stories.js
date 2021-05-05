import React from 'react';
import ImageBlock from './ImageBlock';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import Grid from '@react-css/grid';
import Section from '../Section/Section';
import imageOne from './assets/20201219_DevHynes_00055.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00055_blur.jpg';


export default {
  title: 'ImageBlock',
  component: ImageBlock
};

export const Default = () => {
  const image = generatePhotoPlaceholderURL(1000, 500);
  return (
    <>
      <ImageBlock src={image} />
    </>
  );

}

export const SrcNull= () => {
  return (
    <>
      <ImageBlock />
    </>
  );

}

export const Caption = () => {
  const image = generatePhotoPlaceholderURL(1000, 500);
  return (
    <>
      <ImageBlock src={image} caption="1." />
    </>
  );

}

export const LazyLoad = () => {
  
  return (
    <Section>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='4 / span 6'>
          <ImageBlock placeholder={{
            src: imageOneBlur,
            width: 48,
            height: 72
          } }src={imageOne} caption="1. Dev Hynes"/>
        </Grid.Item>
      </Grid>
    </Section>
  );

}