import React from 'react';
import { Primary, Secondary } from './Cta';

export default {
  title: 'Cta',
};


export const PrimaryBtn = () => {
  return (
    <>
      <Primary>
        Github
      </Primary>
    </>
  );
}

export const SecondaryBtn = () => {
  return (
    <>
      <Secondary>
      View Live
      </Secondary>
    </>
  );
}
