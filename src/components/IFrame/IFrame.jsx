import React from 'react';
import styled from 'styled-components';


const Frame = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  border: none;
`

const IFrame = (props) => {
  const { title, src } = props;
  return (
    <Frame title={title} src={src} />
  )
}

export default IFrame;