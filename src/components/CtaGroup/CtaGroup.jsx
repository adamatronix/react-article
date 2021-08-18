import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { Primary, Secondary } from 'components/Cta/Cta';
import Section from 'components/Section/Section';

const Wrapper = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${media.small`
    flex-direction: row;
  `}
`

const ButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin: 0 0 15px;
    }
  }
  width: 80%;
  ${media.small`
    margin: 0 15px;
    width: auto;
  `}
`

const CtaGroup = (props) => {
  const { primary, secondary } = props;
  return (
    <Wrapper contain small>
      { primary ? <ButtonWrapper>
        <a href={primary.href} target="_blank">
          <Primary>{ primary.label }</Primary>
        </a>
      </ButtonWrapper> : ''}
      { secondary ? <ButtonWrapper>
        <a href={secondary.href} target="_blank">
          <Secondary>{secondary.label}</Secondary>
        </a>
      </ButtonWrapper> : ''}
    </Wrapper>
  )
}

export default CtaGroup;