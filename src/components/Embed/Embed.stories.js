import React from 'react';
import Embed from './Embed';



export default {
  title: 'Embed',
  component: Embed
};

export const Default = () => {
  const embedString = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/100870408?h=e9417b2dba&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>';

  return (
    <>
      <Embed embed={embedString}/>
    </>
  );

}