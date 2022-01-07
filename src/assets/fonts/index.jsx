import { css } from '@emotion/react'
import defaultColor from '../colors'

const font = {
  tag: css`
    font-size: 13px;
    line-height: 2.3076923077;
  `,

  direction: css`
    font-size: 14px;
    line-height: 1;
    font-weight: 700;
  `,

  base: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42857143;
    color: ${defaultColor.primary};
  `,

  heading_13: css`
    font-size: 13px;
    line-height: 1.15;
    font-weight: 500;
  `,
  heading_14: css`
    font-size: 14px;
    line-height: 1.64;
  `,
  heading_18: css`
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
  `,
  heading_20: css`
    font-size: 20px;
    line-height: 1.5;
  `,
}

export default font
