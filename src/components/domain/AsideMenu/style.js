import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { CssMediaQueries, BREAKPOINT_XL } from '@style/MediaQuery'
import defaultColor from '@assets/colors'

const AsideWrapper = styled.aside`
  height: 50px; // FIXME: 나중에 삭제하기
  padding: 9px 0;

  ul > li > * {
    height: 100%;
    padding: 0 6px;

    ${CssMediaQueries(BREAKPOINT_XL)} {
      padding: 0 10px;
    }
  }
`

const AsideList = styled.ul`
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

const AsideItem = styled.li`
  position: relative;
  height: 100%;

  &:before {
    ${({ divider }) => divider && DividerStyle}
  }
`

export { AsideWrapper, AsideList, AsideItem }
