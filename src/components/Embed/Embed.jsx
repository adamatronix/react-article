import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Embed = ({embed}) => {
  return (
    <>    
      {ReactHtmlParser(embed)}
    </>
  )
}

export default Embed;