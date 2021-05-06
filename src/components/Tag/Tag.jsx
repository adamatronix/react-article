import React from 'react';
import cx from 'classnames/bind';
import styles from './styles/tag.module.scss';

const Tag = (props) => {
  const { children, className } = props;

  return (
    <>
      <div className={cx(styles.wrapper, className)}>
        { children }
      </div>      
    </>
  );
}

export default Tag;

const TagDark = (props) => {
  const { children, className } = props;

  return (
    <>
      <Tag className={cx(styles.dark, className)}>
        { children }
      </Tag>
    </>
  )
}

export { TagDark };

const TagDarkOutline = (props) => {
  const { children, className } = props;

  return (
    <>
      <Tag className={cx(styles['dark-outline'], className)}>
        { children }
      </Tag>
    </>
  )
}

export { TagDarkOutline };