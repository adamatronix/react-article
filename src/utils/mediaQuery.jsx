import { css } from 'styled-components';

export const breakpoint = {
  small: '768px',
  medium: '900px',
  large: '1080px',
  xlarge: '1440px',
  xxlarge: '1920px',
};

export const media = {
  // ns = not small
  small: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.small}) {
        ${css(...args)}
      }
    `,
  medium: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.medium}) {
        ${css(...args)}
      }
    `,
  large: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
  xlarge: (...args) =>
  css`
    @media screen and (min-width: ${breakpoint.xlarge}) {
      ${css(...args)}
    }
  `,
  xxlarge: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.xxlarge}) {
        ${css(...args)}
      }
    `,
};