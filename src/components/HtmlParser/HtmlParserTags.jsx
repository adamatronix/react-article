import React from 'react';
import classNames from 'classnames/bind';
import * as styles from "./styles/htmlparser.module.scss";

const Paragraph = props => {
    const { children } = props;
    const classesMain = classNames(styles.p);
    return (
        <p className={classesMain} {...props}>{children}</p>
    )
}

const Strong = props => {
    const { children } = props;
    return (
        <strong {...props}>{children}</strong>
    )
}

const Em = props => {
    const { children } = props;
    return (
        <em {...props}>{children}</em>
    )
}

export { 
    Paragraph,
    Strong,
    Em
 };