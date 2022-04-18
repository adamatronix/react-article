import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import Section from '../Section/Section';
import Info from '../Info/Info';
import TextBlock from '../TextBlock/TextBlock';
import { Primary } from '../Cta/Cta';
import { fontstack } from 'utils/fontstack';

const Wrapper = styled(Section)`
  ${fontstack.default}
  line-height: 1.33;
`

const Cta = styled.a`
  display: none;
  ${media.small`
    display: inline-block;
  `}
`

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`

const GridLeftItem = styled.div`
  grid-column: 1 / span 12;

  ${media.small`
    grid-column: 1 / span 6;
  `}
`

const GridRightItem = styled.div`
  grid-column: 1 / span 12;

  ${media.small`
    grid-column: 7 / span 6;
  `}
`

const CopyIntro = (props) => {
  const { info, text, cta} = props;

  return (
    <Wrapper contain>
      <Grid>
        <GridLeftItem>
          { info ? <Info 
            title={info.title}
            role={info.role}
            type={info.type}
            date={info.date}
          /> : ''}
          { cta ? 
            <Cta href={cta.href} target="_blank">
              <Primary>
                { cta.label }
              </Primary>
            </Cta>
             : ''
          }
        </GridLeftItem>
        <GridRightItem>
          { text ? <TextBlock
            content={text}
          /> : ''}
        </GridRightItem>
      </Grid>
    </Wrapper>
  );
}

export default CopyIntro;