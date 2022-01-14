import styled from '@emotion/styled'
import {
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  CssMediaQueries,
} from '@style/MediaQuery'
import { GNB_HEIGHT, GNB_HEIGHT_SM } from '@utils/constants'
import { Slider } from '@components/domain'

const MainContainer = styled.main`
  height: 100vh;
  padding-top: ${GNB_HEIGHT_SM};
  overflow: hidden;

  ${CssMediaQueries(BREAKPOINT_MD + BREAKPOINT_XL)} {
    padding-top: ${GNB_HEIGHT};
  }

  ${CssMediaQueries(BREAKPOINT_XL)} {
    padding-top: ${GNB_HEIGHT};
  }
`

const HomePage = () => {
  return (
    <MainContainer>
      <Slider />
    </MainContainer>
  )
}

export default HomePage
