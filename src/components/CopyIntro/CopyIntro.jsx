import React from 'react';
import Grid from '@react-css/grid';
import Section from '../Section/Section';
import Info from '../Info/Info';
import TextBlock from '../TextBlock/TextBlock';
import { CtaPrimary } from '../Cta/Cta';
import styles from './styles/copy-intro.module.scss';

const CopyIntro = (props) => {

  const { info, text, cta} = props;

  return (
    <Section className={styles.wrapper}>
      <Grid columnGap='30px' columns="repeat(12, 1fr)">
        <Grid.Item column='1 / span 6'>
          { info ? <Info 
            title={info.title}
            role={info.role}
            type={info.type}
            date={info.date}
          /> : ''}
          { cta ? 
            <a href={cta.href} target="_blank">
              <CtaPrimary>
                { cta.label }
              </CtaPrimary>
            </a>
             : ''
          }
        </Grid.Item>
        <Grid.Item column='7 / span 6'>
          { text ? <TextBlock
            content={text}
          /> : ''}
        </Grid.Item>
      </Grid>
    </Section>
  );
}

export default CopyIntro;