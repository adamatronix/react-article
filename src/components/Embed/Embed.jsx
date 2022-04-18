import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Wrapper = styled.div`
  position: relative;
  padding: ${props => props.ratio ? `${props.ratio}% 0 0` : '0'};

  & > iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const Embed = ({embed}) => {

  const {
    html,
    width,
    height,
    thumbnail_url,
    thumbnail_width,
    thumbnail_height
  } = embed || {};

  const paddingRatio = (height / width) * 100;
  return (
    <Wrapper ratio={paddingRatio}>    
      {ReactHtmlParser(html)}
    </Wrapper>
  )
}

export default Embed;