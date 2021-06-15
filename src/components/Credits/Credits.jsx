import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames/bind';
import Grid from '@react-css/grid';
import { v4 as uuidv4 }from "uuid";
import Section from "../Section/Section";
import * as styles from './styles/credits.module.scss';


const CreditLine = props => {
    const { data } = props;

    return(
        <li className={styles.line}><span className={styles.lineTitle}>{data.title}:</span> <span className={styles.lineName}>{data.name}</span></li>
    )
}

const Credits = props => {
    const { className, data, ...rest } = props;
    const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
    var classesMain = classNames(styles.list, className);

    return (
        <Section className={styles.wrapper} contain small>  
          <Grid columnGap={isDesktop ? '30px' : '15px'} columns="repeat(12, 1fr)">
            <Grid.Item column={ isDesktop ? '4 / span 6' : '2 / span 10'}>
              <ul className={classesMain} {...rest}>
                  { data.map( line => {
                      return <CreditLine data={line} key={uuidv4()} />
                  })}
              </ul>
              </Grid.Item>
            </Grid>
        </Section>
    )
}

export default Credits;

