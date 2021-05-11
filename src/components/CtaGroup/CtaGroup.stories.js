import React from 'react';
import CtaGroup from './CtaGroup';

export default {
  title: 'CtaGroup',
};


export const Default = () => {
  return (
    <>
      <CtaGroup
        primary={{ href:'#', label: 'GitHub' }}
        secondary={{ href:'#', label: 'View Live'}}
      />
    </>
  );
}