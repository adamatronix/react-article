import React from 'react';
import classNames from 'classnames/bind';
import './styles/inline-anchor.scss';

const InlineAnchor = props => {
    const { className, children } = props;
    var classesMain = classNames("inlineAnchorWrapper", className);



    return (
        <a className={classesMain} {...props}>
            {children}
        </a>
    )
}

export default InlineAnchor;