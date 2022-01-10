import styled from '@emotion/styled'
import {
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  CssMediaQueries,
} from '@style/MediaQuery'
import { GNB_HEIGHT, GNB_HEIGHT_SM } from '@utils/constants'
import { SliderItem } from '@components/domain'

const MainContainer = styled.main`
  height: 100vh;
  padding-top: ${GNB_HEIGHT_SM};

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
      <SliderItem
        src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.thumb_1006_280.jpg"
        srcXL="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
        title="나도 개발자 되고 싶다"
        content="프론트엔드 무료 교육과정 참여하기"
      />
    </MainContainer>
  )
}

export default HomePage
