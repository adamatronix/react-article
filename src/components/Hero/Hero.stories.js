import React from 'react';
import Hero from './Hero';
import minariImage from './assets/minari.jpg.2000x2000_q90.jpg';
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
      <Hero src={minariImage}/>
    </>
  );

}