import React from 'react';
import Embed from './Embed';



export default {
  title: 'Embed',
  component: Embed
};

export const Default = () => {
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
      <Embed embed={oEmbed}/>
    </>
  );

}