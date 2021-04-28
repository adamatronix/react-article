import React from 'react';
import Section from './Section';

export default {
  title: 'Section',
  component: Section
};

const placeholder = {
  width: "100%",
  paddingBottom: "40%",
  backgroundColor: "#ddd"
}

export const Default = () => {
  return (
    <>
      <Section>
        <div style={placeholder}></div>
      </Section>
    </>
  );
}

export const Small = () => {
  return (
    <>
      <Section small>
        <div style={placeholder}></div>
      </Section>
    </>
  );
}