import React from 'react';
import classNames from 'classnames/bind';
import Grid from '@react-css/grid';
import { v4 as uuidv4 }from "uuid";
import Section from "../Section/Section";
import styles from './styles/credits.module.scss';


const CreditLine = props => {
    const { data } = props;

    return(
        <li className={styles.line}><span className={styles['line-title']}>{data.title}:</span> <span className={styles['line-name']}>{data.name}</span></li>
    )
}

const Credits = props => {
    const { className, data } = props;
    var classesMain = classNames(styles.list, className);

    return (
        <Section className={styles.wrapper} contain small>  
          <Grid columnGap='30px' columns="repeat(12, 1fr)">
            <Grid.Item column='4 / span 6'>
              <ul className={classesMain} {...props}>
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

