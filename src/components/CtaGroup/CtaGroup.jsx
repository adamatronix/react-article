import React from 'react';
import cx from 'classnames/bind';
import { CtaPrimary, CtaSecondary } from '../Cta/Cta';
import Section from '../Section/Section';
import styles from './styles/cta-group.module.scss';

const CtaGroup = (props) => {
  const { primary, secondary } = props;

  return (
    <Section className={styles.wrapper} contain small>
      <div className={styles['button-wrapper']}>
        <CtaPrimary>GitHub</CtaPrimary>
      </div>
      <div className={styles['button-wrapper']}>
        <CtaSecondary>View Live</CtaSecondary>
      </div>
    </Section>
  )
}

export default CtaGroup;