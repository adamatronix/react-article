import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Grid from '@react-css/grid';
import Section from '../Section/Section';
import TextBlock from '../TextBlock/TextBlock';

const Body = (props) => {
  const { data } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column={isDesktop ? '4 / span 6' : '1 / span 12'}>
          <TextBlock
            content={data}
          />
        </Grid.Item>
      </Grid>
    </Section>
  )
}

export { Body };

const GridItem = styled(Grid.Item)`
  &:not(:last-child) {
    ${({ desktop }) => !desktop && `
      margin: 0 0 20px;
    `}
  }
`

const CopySection = (props) => {
  const { data } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <GridItem desktop={isDesktop} column={isDesktop ? '1 / span 6' : '1 / span 12'}>
          { data && data[0] ? <TextBlock
            content={data[0]}
          /> : '' }
        </GridItem>
        <GridItem desktop={isDesktop} column={ isDesktop ? '7 / span 6' : '1 / span 12'}>
          { data && data[1] ? <TextBlock
            content={data[1]}
          /> : '' }
        </GridItem>
      </Grid>
    </Section>
  )
}

export { CopySection };

