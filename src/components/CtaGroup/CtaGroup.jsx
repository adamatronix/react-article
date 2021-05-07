import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import { CtaPrimary, CtaSecondary } from '../Cta/Cta';
import Section from '../Section/Section';
import styles from './styles/cta-group.module.scss';

const CtaGroup = (props) => {
  const { primary, secondary } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <Section className={cx(styles.wrapper, { [styles['wrapper--desktop']]: isDesktop })} contain small>
      <div className={cx({[styles['button-wrapper']]: !isDesktop, [styles['button-wrapper--desktop']]: isDesktop })}>
        <CtaPrimary>GitHub</CtaPrimary>
      </div>
      <div className={cx({[styles['button-wrapper']]: !isDesktop, [styles['button-wrapper--desktop']]: isDesktop })}>
        <CtaSecondary>View Live</CtaSecondary>
      </div>
    </Section>
  )
}

export default CtaGroup;