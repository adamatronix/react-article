import React from 'react';
import styled from 'styled-components';

const AnchorWrapper = styled.a` 
  background: #e6e6e6;
  border: 1px solid #e6e6e6;
  color: inherit;
  font-weight: normal;
  padding: 3px;
  text-decoration: none;

  &:hover,
  &:focus {
      background: transparent;
  }
`
const InlineAnchor = props => {
    const { className, children } = props;

    return (
        <AnchorWrapper className={className} {...props}>
            {children}
        </AnchorWrapper>
    )
}

export default InlineAnchor;