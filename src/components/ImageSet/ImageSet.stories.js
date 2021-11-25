import React from 'react';
import { Image50, Image90, Image100 } from './ImageSet';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import useWindowSize from 'components/utils/useWindowSize';

export default {
  title: 'ImageSet',
  parameters:{
    layout:'fullscreen',
  }, 
};

export const ImageFifty = () => {
  const image = generatePhotoPlaceholderURL(500, 500);
  const imageMobile = generatePhotoPlaceholderURL(500, 800);
  const [width, height] = useWindowSize();
  const theImage = width ? width > 768 ? image : imageMobile : null;
  
  return (
    <>
      <Image50 src={theImage} alt="test"/>
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