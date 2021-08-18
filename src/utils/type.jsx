import { css } from 'styled-components';

export const type = (type) => {

  const types = {
    heading1: css`
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;
    `,
    heading2: css`
      font-weight: normal;
      font-size: 30px;
      line-height: 36px;
    `,
    heading3: css`
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
    `,
    subtitle: css`
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    `,
    body: css`
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
    `,
    caption: css`
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
    `,
    overline: css`
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
    `
  }

  return types[type];
}