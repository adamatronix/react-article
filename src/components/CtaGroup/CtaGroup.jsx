import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames/bind';
import CtaPrimary from '../Cta/CtaPrimary';
import CtaSecondary from '../Cta/CtaSecondary';
import Section from '../Section/Section';
import styles from './styles/cta-group.module.scss';

const CtaGroup = (props) => {
  const { primary, secondary } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <Section className={cx(styles.wrapper, { [styles.wrapperDesktop]: isDesktop })} contain small>
      { primary ? <div className={cx({[styles.buttonWrapper]: !isDesktop, [styles.buttonWrapperDesktop]: isDesktop })}>
        <a href={primary.href} target="_blank">
          <CtaPrimary>{ primary.label }</CtaPrimary>
        </a>
      </div> : ''}
      { secondary ? <div className={cx({[styles.buttonWrapper]: !isDesktop, [styles.buttonWrapperDesktop]: isDesktop })}>
        <a href={secondary.href} target="_blank">
          <CtaSecondary>{secondary.label}</CtaSecondary>
        </a>
      </div> : ''}
    </Section>
  )
}

export default CtaGroup;