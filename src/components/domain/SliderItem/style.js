import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL } from '@style/MediaQuery'
import {
  CARD_PD_BASE,
  CARD_BORDER_RADIUS,
  MAX_WIDTH,
  Slider_HEIGHT,
  Slider_HEIGHT_XL,
  Slider_PD_HORIZINTAL,
} from '@utils/constants'
import { dragNone } from '@style/GlobalCss'
import { typeChecking } from '@utils/functions'

export const SliderBoxWrapper = styled.li`
  float: left;
  height: 100%;
  min-height: 1px;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    width: ${typeChecking(MAX_WIDTH)} !important;
    height: ${Slider_HEIGHT_XL};
    padding: 0 ${typeChecking(Slider_PD_HORIZINTAL)};
    box-sizing: content-box;
  }
`

export const SliderBoxContainer = styled.div`
  position: relative;
  margin: ${CARD_PD_BASE} calc(${CARD_PD_BASE} / 2);

  ${CssMediaQueries(BREAKPOINT_XL)} {
    margin: 0;
  }
`
export const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
`
export const ImageContainer = styled.div`
  filter: ${({ isCurrent }) =>
    isCurrent ? `brightness(100%)` : `brightness(50%)`};
  height: ${Slider_HEIGHT};
  border-radius: ${CARD_BORDER_RADIUS};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    height: auto;
    border-radius: none;
  }
`
export const ImageLink = styled.a`
  ${CssMediaQueries(BREAKPOINT_XL + 'hidden')} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  ${dragNone};
`
