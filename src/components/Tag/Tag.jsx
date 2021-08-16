import React from 'react';
import styled from 'styled-components';
import { fontstack } from '../../utils/fontstack';
import { type } from '../../utils/type';

const Wrapper = styled.div`
  ${fontstack.default}
  ${type('caption')}
  display: inline-flex;
  padding: 3px 8px;
  backdrop-filter: blur(20px);
  border-radius: 2px;
`

const DarkWrapper = styled(Wrapper)`
  color: white;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
`

const DarkOutlineWrapper = styled(Wrapper)`
  color: rgba(255, 255, 255, 0.5);;
  border: 1px solid rgba(255, 255, 255, 0.5);
`

const Tag = (props) => {
  const { children, className } = props;

  return (
    <>
      <Wrapper className={className}>
        { children }
      </Wrapper> 
    </>
  );
}

export default Tag;

const TagDark = (props) => {
  const { children, className } = props;

  return (
    <>
      <DarkWrapper className={className}>
        { children }
      </DarkWrapper>
    </>
  )
}

export { TagDark };

const TagDarkOutline = (props) => {
  const { children, className } = props;

  return (
    <>
      <DarkOutlineWrapper className={className}>
        { children }
      </DarkOutlineWrapper>
    </>
  )
}

export { TagDarkOutline };