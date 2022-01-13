import styled from '@emotion/styled'
import { clearFloat } from '@style/GlobalCss'

export const SliderWrapper = styled.div`
  position: relative;
  /* overflow: hidden; */
`

export const SliderContainer = styled.div`
  position: relative;
  display: block;
  touch-action: pan-y;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`

export const SliderList = styled.div`
  position: relative;
  display: block;
  overflow-x: scroll;
  padding: 0 40px;
`

export const SliderTrack = styled.ul`
  width: 10000px;

  &::after {
    ${clearFloat};
  }
`
