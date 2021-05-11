import React from 'react';
import Grid from '@react-css/grid';
import { useMediaQuery } from 'react-responsive';
import Section from '../Section/Section';
import Info from '../Info/Info';
import TextBlock from '../TextBlock/TextBlock';
import CtaPrimary  from '../Cta/CtaPrimary';
import styles from './styles/copy-intro.module.scss';

const CopyIntro = (props) => {

  const { info, text, cta} = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <Section className={styles.wrapper} contain>
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
              <CtaPrimary>
                { cta.label }
              </CtaPrimary>
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
    </Section>
  );
}

export default CopyIntro;