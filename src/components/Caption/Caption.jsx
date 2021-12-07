import React from 'react';
import styled from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';


const CaptionText = styled.div`
  ${fontstack.default}
  ${type('caption')}
  margin: 10px 0;
`

const Caption = (props) => {
  const { children } = props;
  return (
    <CaptionText>{children}</CaptionText>
  )
}

export default Caption;