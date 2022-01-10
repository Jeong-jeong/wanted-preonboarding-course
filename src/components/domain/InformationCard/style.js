import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL } from '@style/MediaQuery'
import font from '@assets/fonts'
import defaultColor from '@assets/colors'
import { CARD_PD_BASE } from '@utils/constants'
import { ellipsisLine1, divider } from '@style/GlobalCss'

export const CardWrapper = styled.div`
  border-radius: 4px;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    position: absolute;
    bottom: 28px;
    left: 34px;
    width: 330px;
    height: 146px;
    text-align: left;
    background-color: white;
    /* opacity: 0; */
  }
`

export const InfoContainer = styled.div``

export const InfoTitle = styled.h2`
  margin-top: ${CARD_PD_BASE};
  ${font.heading_18};
  ${ellipsisLine1};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    margin-left: ${CARD_PD_BASE};
    margin-right: ${CARD_PD_BASE};
    ${font.heading_20};
  }
`

export const InfoContent = styled.h3`
  margin-top: 6px;
  ${font.heading_13};
  color: ${defaultColor.secondary};
  ${ellipsisLine1};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    height: 44px;
    margin: 0 ${CARD_PD_BASE};
    ${font.heading_14};
  }
`

export const Divider = styled.hr`
  ${divider};
`

export const DirectBtn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 6px 8px;
  ${font.direction};
  color: ${defaultColor.blue};
  vertical-align: middle;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    margin: 6px 0 0 13px;
  }
`

export const DirectBtnLabel = styled.span`
  width: 100%;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;

  & > svg {
    margin-top: -2px;
    margin-right: -1px;
    margin-left: 2px;
  }
`
