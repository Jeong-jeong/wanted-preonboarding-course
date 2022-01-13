import styled from '@emotion/styled'
import { clearFloat } from '@style/GlobalCss'
import { Slider_PD_BASE } from '@utils/constants'
import { typeChecking } from '@utils/functions'

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
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
`

export const SliderTrack = styled.ul`
  width: 10000px;
  transition: ${({ isTransition }) =>
    isTransition && `transform 500ms ease 0s`};

  &::after {
    ${clearFloat};
  }
`
