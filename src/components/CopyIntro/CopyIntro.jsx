import React from 'react';
import styled from 'styled-components';
import Grid from '@react-css/grid';
import { useMediaQuery } from 'react-responsive';
import Section from '../Section/Section';
import Info from '../Info/Info';
import TextBlock from '../TextBlock/TextBlock';
import { Primary } from '../Cta/Cta';
import { fontstack } from '../utils/fontstack';

const Wrapper = styled(Section)`
  ${fontstack.default}
  line-height: 1.33;
`

const CopyIntro = (props) => {

  const { info, text, cta} = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Wrapper contain>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column={ isDesktop ? '1 / span 6' : '1 / span 12'}>
          { info ? <Info 
            title={info.title}
            role={info.role}
            type={info.type}
            date={info.date}
          /> : ''}
          { cta && isDesktop ? 
            <a href={cta.href} target="_blank">
              <Primary>
                { cta.label }
              </Primary>
            </a>
             : ''
          }
        </Grid.Item>
        <Grid.Item column={ isDesktop ? '7 / span 6' : '1 / span 12'}>
          { text ? <TextBlock
            content={text}
          /> : ''}
        </Grid.Item>
      </Grid>
    </Wrapper>
  );
}

export default CopyIntro;