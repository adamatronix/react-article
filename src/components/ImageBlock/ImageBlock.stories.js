import React from 'react';
import ImageBlock from './ImageBlock';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
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
    <div>
      <ImageBlock placeholder={{
        src: imageOneBlur,
        width: 48,
        height: 72
      } }src={imageOne} />
    </div>
  );

}