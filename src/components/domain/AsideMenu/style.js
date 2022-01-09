import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { CssMediaQueries, BREAKPOINT_XL } from '@style/MediaQuery'
import defaultColor from '@assets/colors'
import { GNB_HEIGHT_SM, MAINBAR_HEIGHT } from '@utils/constants'

export const AsideWrapper = styled.aside`
  height: calc(${GNB_HEIGHT_SM} - ${MAINBAR_HEIGHT});
  padding: 9px 0;

  ul > li > * {
    height: 100%;
    padding: 0 6px;
    color: ${defaultColor.primary};

    ${CssMediaQueries(BREAKPOINT_XL)} {
      padding: 0 10px;
    }
  }
`

export const AsideList = styled.ul`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const DividerStyle = css`
  display: inline-block;
  content: '';
  width: 1px;
  height: 10px;
  background-color: ${defaultColor.borderLighter};
  margin: auto 10px;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    margin-left: 15px;
    margin-right: 20px;
  }
`

export const AsideItem = styled.li`
  position: relative;
  height: 100%;

  &[class*='menuItem'] {
    & > button {
      margin-right: 10px;
    }
  }

  &:before {
    ${({ divider }) => divider && DividerStyle}
  }
`
