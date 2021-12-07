import React from 'react';
import styled from 'styled-components';
import Caption from '../Caption/Caption';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
import { LazyBlurImage } from '@manualengineering/react-lazyblur';

const LazyImage = styled(LazyBlurImage)`
  pointer-events: none;
`

const Image = styled.img`
  display: block;
  position: relative;
  width: 100%;
`

const Box = styled.div`
  display: block;
  width: 100%; 
  padding-bottom: 100%;
  background-color: #C4C4C4;
`
const ImageBlock = (props) => {

  const { placeholder, src, alt, caption, style, className } = props;
  return (
    <div style={style} className={className}>
      { placeholder && src ? <LazyImage placeholder={placeholder} src={src} alt={alt}/> : src ?
      <Image src={src} alt={alt} /> : <Box /> }
      { caption ? <Caption>{caption}</Caption> : ''}
    </div>
  )
}

export default ImageBlock;