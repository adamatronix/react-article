import React from 'react';
import Credits from './Credits';

export default {
  title: 'Credits',
};

const creditsData = [
  { title: "Creative Direction", name: "Dave Reid"},
  { title: "Art Direction", name: "Julian Cheng"},
  { title: "Photography", name: "Abdela Igmirien"},
  { title: "Development", name: "Adam Gee"}
];

export const Default = () => {
  return (
    <>
      <Credits data={creditsData} />
    </>
  );
}