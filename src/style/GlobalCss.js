import { css } from '@emotion/react'
import defaultColor from '@assets/colors'

export const borderBottom = css`
  box-shadow: 0 1px 0 0 rgba(0 0 0 / 10%);
`

export const borderSelectedNav = css`
  box-shadow: inset 0 -2px ${defaultColor.blueLighter};
`
