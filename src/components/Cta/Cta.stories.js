import React from 'react';
import CtaPrimary from './CtaPrimary';
import CtaSecondary from './CtaSecondary';

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
      View Live
      </CtaSecondary>
    </>
  );
}
