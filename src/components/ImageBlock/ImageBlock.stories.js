import React from 'react';
import ImageBlock from './ImageBlock';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';


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