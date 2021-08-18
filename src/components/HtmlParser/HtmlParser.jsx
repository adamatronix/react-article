import React from 'react';
import { v4 as uuidv4 }from "uuid";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { getStyleObjectFromString } from './HtmlParserHelper';
import InlineAnchor from "components/InlineAnchor/InlineAnchor";
import { Paragraph, Strong, Em } from "./HtmlParserTags";

const HtmlParserTransform = function(node, index) {

    const HtmlParserConvertParagraph = function(node) {
        const children = node.children.map((child) => HtmlParserTransform(child));
        return <Paragraph key={uuidv4()}>{children}</Paragraph>;
    
    }
    
    const HtmlParserConvertStrong = function(node) {
        const children = node.children.map((child) => HtmlParserTransform(child));
        return <Strong key={uuidv4()}>{children}</Strong>;
    
    }

    const HtmlParserConvertEm = function(node) {
        const children = node.children.map((child) => HtmlParserTransform(child));
        return <Em key={uuidv4()}>{children}</Em>;
    
    }
    
    const HtmlParserConvertAnchor = function(node) {
        const children = node.children.map((child) => HtmlParserTransform(child));
        return <InlineAnchor key={uuidv4()} {...node.attribs}>{children}</InlineAnchor>;
    }

    const HtmlParserConvertSpan = function(node) {
        const { style, ...attribs} = node.attribs;
        const children = node.children.map((child) => HtmlParserTransform(child));
        let styleObject = {};

        if(style) {
            styleObject = getStyleObjectFromString(style);
        }
        return <span key={uuidv4()} style={styleObject} {...attribs}>{children}</span>;
    }

    const parseObject = {
        "a": HtmlParserConvertAnchor,
        "p": HtmlParserConvertParagraph,
        "strong": HtmlParserConvertStrong,
        "em": HtmlParserConvertEm,
        "span": HtmlParserConvertSpan
    }

    
    if(node.type === "tag") {
        var content = parseObject[node.name];

        if(content) {
            return content(node);
        }
    } else {
        return convertNodeToElement(node, index, HtmlParserTransform);
    }

}



const HtmlParser = props => {

    const text = ReactHtmlParser(props.children, {
        transform: HtmlParserTransform
    });

    return (
        <React.Fragment>
            {text}
        </React.Fragment>
    )
}

export default HtmlParser;