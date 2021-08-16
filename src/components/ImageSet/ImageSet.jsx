import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';
import ImageBlock from '../ImageBlock/ImageBlock';
import Section from '../Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`

const GridTightItem = styled.div`
  grid-column: 1 / span 12;

  ${media.small`
    grid-column: 4 / span 6;
  `}
`

const GridWideItem = styled.div`
  grid-column: 1 / span 12;
`

const Image50 = (props) => {
  const { src, placeholder, alt, caption } = props;

  return (
    <Section contain>
      <Grid>
        <GridTightItem>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </GridTightItem>
      </Grid>
    </Section>
  )
}

const Image90 = (props) => {
  const { src, placeholder, alt, caption } = props;
  return (
    <Section>
      <Grid>
        <GridWideItem>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </GridWideItem>
      </Grid>
    </Section>
  )
}

const Image100 = (props) => {
  const { src, placeholder, alt, caption } = props;
  return (
    <Section full>
      <Grid>
        <GridWideItem>
          <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/>
        </GridWideItem>
      </Grid>
    </Section>
  )
}

export {
  Image50,
  Image90,
  Image100
}