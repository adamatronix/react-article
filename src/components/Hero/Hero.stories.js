import React from 'react';
import Hero from './Hero';
import minariImage from './assets/minari.jpg.2000x2000_q90.jpg';
import minariImageBlur from './assets/minari.jpg.2000x2000_q90_blur.jpg';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';


export default {
  title: 'Hero',
  component: Hero,
  parameters:{
    layout:'fullscreen',
  },
};

export const Default = () => {
  
  return (
    <>
      <Hero src={minariImage} placeholder={minariImageBlur} />
    </>
  );

}

export const IFrame = () => {
  
  return (
    <>
      <Hero iframe="https://adamatronix.github.io/exploring-the-warp-of-canadian-psychedelia-vol1/"/>
    </>
  );

}