import React from 'react';
import { CtaPrimary, CtaSecondary } from './Cta';

export default {
  title: 'Cta',
};


export const Primary = () => {
  return (
    <>
      <CtaPrimary>
        Github
      </CtaPrimary>
    </>
  );
}

export const Secondary = () => {
  return (
    <>
      <CtaSecondary>
        Github
      </CtaSecondary>
    </>
  );
}
