import React from 'react';

const TextBlock = (props) => {

  const { content } = props;

  return (
    <div>
      { content }
    </div>
  );
}

export default TextBlock;