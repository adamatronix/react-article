import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import Section from '../Section/Section';
import TextBlock from '../TextBlock/TextBlock';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`

const GridBodyItem = styled.div` 
  grid-column: 1 / span 12;

  ${media.small`
    grid-column: 4 / span 6;
  `}
`

const CopyBody = (props) => {
  const { data } = props;
  return (
    <Section contain>
      <Grid>
        <GridBodyItem>
          <TextBlock
            content={data}
          />
        </GridBodyItem>
      </Grid>
    </Section>
  )
}

export { CopyBody };

const GridItem = styled.div`
  &:not(:last-child) {
    margin: 0 0 20px;
    ${media.small`
      margin: 0;
    `}
  }
`

const GridLeftItem = styled(GridItem)`
  grid-column: 1 / span 12;
  ${media.small`
    grid-column: 1 / span 6;
  `}
`

const GridRightItem = styled(GridItem)`
  grid-column: 1 / span 12;
  ${media.small`
    grid-column: 7 / span 6;
  `}
`

const CopySection = (props) => {
  const { data } = props;

  return (
    <Section contain>
      <Grid>
        <GridLeftItem>
          { data && data[0] ? <TextBlock
            content={data[0]}
          /> : '' }
        </GridLeftItem>
        <GridRightItem>
          { data && data[1] ? <TextBlock
            content={data[1]}
          /> : '' }
        </GridRightItem>
      </Grid>
    </Section>
  )
}

export { CopySection };

