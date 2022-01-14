import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL } from '@style/MediaQuery'
import { clearFloat } from '@style/GlobalCss'
import { Slider_PD_BASE, Slider_PD_XL } from '@utils/constants'
import { typeChecking } from '@utils/functions'

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    padding-top: 25px;
  }
`

export const SliderContainer = styled.div`
  position: relative;
  display: block;
  touch-action: pan-y;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
`

export const SliderList = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0 ${typeChecking(Slider_PD_BASE)};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    padding: 0 ${typeChecking(Slider_PD_XL)};
  }
`

export const SliderTrack = styled.ul`
  width: ${({ width }) => typeChecking(width)};
  transition: ${({ isTransition }) =>
    isTransition && `transform 500ms ease 0s`};

  &::after {
    ${clearFloat};
  }
`
