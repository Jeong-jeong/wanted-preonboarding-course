import styled from '@emotion/styled'
import {
  CssMediaQueries,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_XL,
} from '@style/MediaQuery'
import { MainBar, MainNav, AsideMenu } from '@components/domain'
import {
  MAX_WIDTH,
  GNB_HEIGHT,
  GNB_HEIGHT_SM,
  GNB_ZINDEX,
} from '@utils/constants'
import { borderBottom } from '@style/GlobalCss'

const GNBWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: ${GNB_ZINDEX};
  ${borderBottom};
`

const GNBContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  max-width: ${MAX_WIDTH};
  height: ${GNB_HEIGHT};

  ${CssMediaQueries(BREAKPOINT_SM)} {
    height: ${GNB_HEIGHT_SM};
  }

  ${CssMediaQueries(BREAKPOINT_MD)} {
    width: 90%;
    height: ${GNB_HEIGHT_SM};
    margin: 0 auto;
  }

  ${CssMediaQueries(BREAKPOINT_MD + BREAKPOINT_XL)} {
    height: ${GNB_HEIGHT};
    width: 90%;
    margin: 0 auto;
  }

  ${CssMediaQueries(BREAKPOINT_XL)} {
    height: ${GNB_HEIGHT};
    margin: 0 auto;
  }
`

const GNB = () => {
  return (
    <GNBWrapper role="presentation">
      <GNBContainer>
        <MainBar />
        <MainNav />
        <AsideMenu />
      </GNBContainer>
    </GNBWrapper>
  )
}

export default GNB
