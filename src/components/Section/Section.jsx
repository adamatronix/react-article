import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/mediaQuery';

const gutterStyle = css` 
  padding: 0 15px;
  ${media.small`
    padding: 0 30px;
  `}
`

const containStyle = css` 
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto; 
`

const smallStyle = css`
  margin-top: 80px;
  margin-bottom: 80px;
  ${media.small`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`

const standardStyle = css`
  margin-top: 80px;
  margin-bottom: 80px;
  ${media.small`
    margin-top: 140px;
    margin-bottom: 140px;
  `}
`

const Wrapper = styled.div` 
  ${ props => props.small ? css`
    ${smallStyle}
  ` : css` 
    ${standardStyle}
  `}

  ${props => !props.full && css`
    ${gutterStyle}`
  }

  ${({ contain }) => contain && `
    ${containStyle}
  `}
`

const Section = (props) => {
  const { children, small, full, contain, className} = props;
  return (
    <Wrapper
      className={className} 
      small={small} 
      full={full} 
      contain={contain}>
      { children }
    </Wrapper>
  )
}

export default Section;