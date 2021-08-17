import React from 'react';
import styled from 'styled-components';
import { fontstack } from '../utils/fontstack';
import { type } from '../utils/type';
import { media } from '../utils/mediaQuery';
import { ReactComponent as ArrowIcon } from './assets/Manual_MontrealArrow.svg';

const Button = styled.button`
  ${fontstack.default}
  ${type('subtitle')}
  border: none;
  display: flex;
  outline: none;
  background: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 13px 40px;
  border-radius: 2px;
  border: 1px solid black;
  justify-content: center;
  width: 100%;

  ${media.small`
    width: auto;
  `}
`

const SecondaryButton = styled(Button)`
  background-color: black;
  color: white;
`


const PrimaryArrow = styled(ArrowIcon)`
  fill: black;
`

const SecondaryArrow = styled(ArrowIcon)`
  fill: white;
`

const Primary = (props) => {
  const { children } = props;
  return (
    <Button>
      { children }
      <PrimaryArrow />
    </Button>
  )
}

export { Primary };

const Secondary = (props) => {
  const { children } = props;
  return (
    <SecondaryButton>
      { children }
      <SecondaryArrow/>
    </SecondaryButton>
  )
}

export { Secondary }
