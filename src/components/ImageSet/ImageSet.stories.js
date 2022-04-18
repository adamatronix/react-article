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

export const ImagehundredEmbed = () => {
  const embedString = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/100870408?h=e9417b2dba&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>';
  return (
    <>
      <Image100 embed={embedString}/>
    </>
  );
}