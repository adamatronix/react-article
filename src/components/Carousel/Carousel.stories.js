import React from 'react';
import Carousel from './Carousel';
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';


export default {
  title: 'Carousel',
  component: Carousel
};

const placeholder = {
  width: '100%',
  background: '#ccc',
  marginLeft: '10px'
}

const imageArray = new Array(10).fill();
export const Default = () => {
  
  return (
    <>
      <Carousel itemSize="55%">
        { imageArray.map((item, index) => {
          const image = generatePhotoPlaceholderURL(300, 300);
            return (
              <div style={placeholder}>
                <img src={image}  style={{pointerEvents: 'none', width: '100%', display: 'block'}} />
              </div>
            )
        })}
      </Carousel>
    </>
  );

}