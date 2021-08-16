import React from 'react';
import styled from 'styled-components';
import { LazyBackgroundBlur } from '@manualengineering/react-lazyblur';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 100vh;
`

const WrapperInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

const Image = styled.div`
  background: url(${props => props.src}) center center no-repeat;
  background-size: 'cover';
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
`

const Hero = (props) => {
  const { src, placeholder } = props;

  return (
    <Wrapper>
      <WrapperInner>
        { placeholder ? <LazyBackgroundBlur src={src} placeholder={placeholder} />
          : <Image src={src} /> }
      </WrapperInner>
    </Wrapper>
  );
}

export default Hero;