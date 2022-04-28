import React from 'react';
import { Image16, Image50, Image90, Image100 } from './ImageSet';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import useWindowSize from 'components/utils/useWindowSize';

export default {
  title: 'ImageSet',
  parameters:{
    layout:'fullscreen',
  }, 
};

export const ImageSixteen = () => {
  const image = generatePhotoPlaceholderURL(400, 400);

  const items = [
    {
      src: image, 
      alt: ''
    },
    {
      src: image, 
      alt: ''
    },
    {
      src: image, 
      alt: ''
    },
    {
      src: image, 
      alt: ''
    },
    {
      src: image, 
      alt: ''
    },
    {
      src: image, 
      alt: ''
    }
  ]

  return (
    <>
      <Image16 items={items}/>
    </>
  );
}

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
  const oEmbed= {
    "html": "<iframe src=\"https://player.vimeo.com/video/100870408?h=e9417b2dba&amp;app_id=122963\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"Hong Kong/Seoul Sojourn\"></iframe>",
    "width": 640,
    "height": 360,
    "thumbnail_url": "https://i.vimeocdn.com/video/482502358-96fb9870bb89842b307711d5fe3a494e16218ea11cdaba7b8bde3e4cf14f105b-d_640",
    "thumbnail_width": 640,
    "thumbnail_height": 360,
    "embed_url": "https://vimeo.com/100870408"
  }
  return (
    <>
      <Image100 embed={oEmbed}/>
    </>
  );
}