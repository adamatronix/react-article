import React from 'react';
import TextBlock from './TextBlock';

export default {
  title: 'TextBlock',
};


export const Default = () => {
  return (
    <>
      <TextBlock
        content="<p>This is test markup from a rich text editor.</p><p>It's content is parsed by the HtmlParser component.</p>"
       />
    </>
  );
}