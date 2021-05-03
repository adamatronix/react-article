import React from 'react';
import Grid from '@react-css/grid';
import Section from '../Section/Section';
import TextBlock from '../TextBlock/TextBlock';

const Body = (props) => {
  const { data } = props;
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='4 / span 6'>
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
  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='1 / span 6'>
          { data && data[0] ? <TextBlock
            content={data[0]}
          /> : '' }
        </Grid.Item>
        <Grid.Item column='7 / span 6'>
          { data && data[1] ? <TextBlock
            content={data[1]}
          /> : '' }
        </Grid.Item>
      </Grid>
    </Section>
  )
}

export { CopySection };

