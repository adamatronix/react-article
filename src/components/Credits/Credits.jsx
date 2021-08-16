import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { fontstack } from '../../utils/fontstack';
import { type } from '../../utils/type';
import Grid from '@react-css/grid';
import { v4 as uuidv4 }from "uuid";
import Section from "../Section/Section";

const Wrapper = styled(Section)`
  text-align: center;
`

const List = styled.ul` 
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
`

const Line = styled.li` 
  &:not(:last-child) {
    margin: 0 0 16px;
  }
  display: flex;
`

const LineText = styled.span`
    ${fontstack.default};
    ${type('body')}
    width: 50%;
    box-sizing: border-box;
    padding: 0 15px;
`

const Title = styled(LineText)`
  opacity: 0.4;
  text-align: right;
`
const Name = styled(LineText)`
  text-align: left;
`

const CreditLine = props => {
    const { data } = props;

    return(
        <Line><Title>{data.title}:</Title><Name>{data.name}</Name></Line>
    )
}

const Credits = props => {
    const { className, data, ...rest } = props;
    const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

    return (
        <Wrapper contain small>  
          <Grid columnGap={isDesktop ? '30px' : '15px'} columns="repeat(12, 1fr)">
            <Grid.Item column={ isDesktop ? '4 / span 6' : '2 / span 10'}>
              <List className={className} {...rest}>
                  { data.map( line => {
                      return <CreditLine data={line} key={uuidv4()} />
                  })}
              </List>
              </Grid.Item>
            </Grid>
        </Wrapper>
    )
}

export default Credits;

