import React from 'react';
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

const CopySection = (props) => {
  const { data } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column={isDesktop ? '1 / span 6' : '1 / span 12'}>
          { data && data[0] ? <TextBlock
            content={data[0]}
          /> : '' }
        </Grid.Item>
        <Grid.Item column={ isDesktop ? '7 / span 6' : '1 / span 12'}>
          { data && data[1] ? <TextBlock
            content={data[1]}
          /> : '' }
        </Grid.Item>
      </Grid>
    </Section>
  )
}

export { CopySection };

