import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import ImageBlock from '../ImageBlock/ImageBlock';
import Embed from '../Embed/Embed';
import Section from '../Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 20px;
  ${media.small`
    grid-column-gap: 30px;
  `}
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

const GridSixteen = styled.div` 
  grid-column: span 6;
  ${media.small`
    grid-column: ${props => props.span};
  `}
`

const Image16 = (props) => {
  const { items } = props;
  const total = items.length;
  const firstColumn = {
    5: '2 / span 2',
    4: '3 / span 2',
    3: '7 / span 2',
    2: '7 / span 2',
    1: '7 / span 2'
  }

  return (
    <Section contain>
      <Grid>
        { items ? items.map((item, index) => {
          return (
            <GridSixteen span={index === 0 && total < 6 ? firstColumn[total] : 'span 2'}>
              <ImageBlock src={item.src} alt={item.alt}/>
            </GridSixteen>
          )
        }) : null}
      </Grid>
    </Section>
  )
}

const Image50 = (props) => {
  const { src, placeholder, alt, caption, embed } = props;

  return (
    <Section contain>
      <Grid>
        <GridTightItem>
          { src ? <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/> : embed ? <Embed embed={embed} /> : null }
        </GridTightItem>
      </Grid>
    </Section>
  )
}

const Image90 = (props) => {
  const { src, placeholder, alt, caption, embed } = props;
  return (
    <Section>
      <Grid>
        <GridWideItem>
        { src ? <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/> : embed ? <Embed embed={embed} /> : null }
        </GridWideItem>
      </Grid>
    </Section>
  )
}

const Image100 = (props) => {
  const { src, placeholder, alt, caption, embed } = props;
  return (
    <Section full>
      <Grid>
        <GridWideItem>
        { src ? <ImageBlock src={src} placeholder={placeholder} caption={caption} alt={alt}/> : embed ? <Embed embed={embed} /> : null }
        </GridWideItem>
      </Grid>
    </Section>
  )
}

export {
  Image16,
  Image50,
  Image90,
  Image100
}