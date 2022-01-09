import React from 'react'
import styled from '@emotion/styled'
import IconMenuSrc from '@assets/icons/icon-menu.png'
import {
  CssMediaQueries,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
} from '@style/MediaQuery'
import { Image, Logo } from '@components/base'
import {
  GNB_PD_HORIZONTAL,
  GNB_PD_VETCITAL,
  MAINBAR_HEIGHT,
  GNB_HEIGHT,
} from '@utils/constants'

const MainBarWrapper = styled.div`
  display: flex;
  align-items: center;

  ${CssMediaQueries(BREAKPOINT_SM)} {
    width: 100%;
    height: ${MAINBAR_HEIGHT};
    padding: ${GNB_PD_VETCITAL} ${GNB_PD_HORIZONTAL};
  }

  ${CssMediaQueries(BREAKPOINT_MD)} {
    width: 100%;
    height: ${MAINBAR_HEIGHT};
    padding: ${GNB_PD_VETCITAL} 0;
  }

  ${CssMediaQueries(BREAKPOINT_LG)} {
    height: ${GNB_HEIGHT};
    padding: ${GNB_PD_VETCITAL} 0;
  }
`

const MainBarContainer = styled.div``

const IconMenu = styled.button`
  margin-top: -2px;
  margin-right: 15px;
`

const MainBar = () => {
  return (
    <MainBarWrapper>
      <MainBarContainer>
        <IconMenu>
          <Image
            width={17}
            height={14}
            src={IconMenuSrc}
            mode="contain"
            alt="메뉴 아이콘"
          />
        </IconMenu>
        <Logo />
      </MainBarContainer>
    </MainBarWrapper>
  )
}

export default MainBar
