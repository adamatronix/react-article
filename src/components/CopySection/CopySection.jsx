import React from 'react';
import Grid from '@react-css/grid';
import Section from '../Section/Section';
import TextBlock from '../TextBlock/TextBlock';

const Body = (props) => {

  return (
    <Section contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='4 / span 6'>
          <TextBlock
            content="<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p>
            <p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
          />
        </Grid.Item>
      </Grid>
    </Section>
  )
}

export { Body };