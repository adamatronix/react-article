import React from 'react';
import HtmlParser from 'components/HtmlParser/HtmlParser';

const TextBlock = (props) => {

  const { content } = props;

  return (
    <HtmlParser>
      { content }
    </HtmlParser>
  );
}

export default TextBlock;