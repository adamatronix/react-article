import React from 'react';
import styled, { css } from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
import { media } from 'utils/mediaQuery';

const Wrapper = styled.div`
  margin: 0 0 80px;

  ${media.small`
    margin: 0 0 40px;
  `}
`

const Text = css`
  color: #111;
  ${fontstack.default}
  ${type('subtitle')}
  margin: 0 0 4px;
`

const Title = styled.h2`
  ${Text}
  opacity: 1;
`

const Role = styled.div`
  ${Text}
  opacity: 0.5;
`

const Type = styled.div`
  ${Text}
  opacity: 0.35;
`

const Date = styled.div`
  ${Text}
  opacity: 0.2;
`

const Info = (props) => {

  const { title, role, type, date} = props;

  return (
    <Wrapper>
      <Title>{ title }</Title>
      <Role>{ role }</Role>
      <Type>{ type }</Type>
      <Date>{ date }</Date>
    </Wrapper>
  );
}

export default Info;