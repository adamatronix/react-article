import React from 'react';
import { Image50, Image90, Image100 } from './ImageSet';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';

export default {
  title: 'ImageSet',
  parameters:{
    layout:'fullscreen',
  }, 
};

export const ImageFifty = () => {
  const image = generatePhotoPlaceholderURL(500, 500);

  return (
    <>
      <Image50 src={image} alt="test"/>
    </>
  );
}

export const ImageNinety = () => {
  const image = generatePhotoPlaceholderURL(1000, 400);

  return (
    <>
      <Image90 src={image} alt="test"/>
    </>
  );
}

export const Imagehundred = () => {
  const image = generatePhotoPlaceholderURL(1000, 400);

  return (
    <>
      <Image100 src={image} alt="test"/>
    </>
  );
}