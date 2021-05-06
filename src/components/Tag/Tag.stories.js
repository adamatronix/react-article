import React from 'react';
import Tag, { TagDark, TagDarkOutline } from './Tag';

export default {
  title: 'Tag',
  parameters:{
    layout:'fullscreen',
  },
};


export const Primary = () => {
  return (
    <>
      <Tag>
        Github
      </Tag>
    </>
  );
}

export const Dark = () => {
  return (
    <div style={{width: '100%', height: '100vh', background: 'black', boxSizing: 'border-box', padding: '30px'}}>
      <TagDark>
        Github
      </TagDark>
    </div>
  );
}

export const DarkOutline = () => {
  return (
    <div style={{width: '100%', height: '100vh', background: 'black', boxSizing: 'border-box', padding: '30px'}}>
      <TagDarkOutline>
        Github
      </TagDarkOutline>
    </div>
  );
}
