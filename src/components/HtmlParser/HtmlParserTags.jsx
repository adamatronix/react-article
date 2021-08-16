import React from 'react';
import styled from 'styled-components';
import { fontstack } from '../../utils/fontstack';
import { type } from '../../utils/type';

const PTag = styled.p`
  ${fontstack.default}
  ${type('subtitle')}

  margin: 0 0 20px; 

  &:last-child {
      margin-bottom: 0;
  }
`

const Paragraph = props => {
    const { children } = props;
    return (
        <PTag {...props}>{children}</PTag>
    )
}

const Strong = props => {
    const { children } = props;
    return (
        <strong {...props}>{children}</strong>
    )
}

const Em = props => {
    const { children } = props;
    return (
        <em {...props}>{children}</em>
    )
}

export { 
    Paragraph,
    Strong,
    Em
 };