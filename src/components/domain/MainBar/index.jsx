import React from 'react'
import styled from '@emotion/styled'
import { Image, Logo } from '@components/base'
import {
  CssMediaQueries,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
} from '@style/MediaQuery'
import IconMenuSrc from '@assets/icons/icon-menu.png'

const HEIGHT_MD = 60
const HEIGHT_LG = 50

const MainBarWrapper = styled.div`
  border: 1px solid;
  ${CssMediaQueries(BREAKPOINT_SM)} {
    width: 100%;
    height: ${HEIGHT_MD};
    padding: 15px 20px;
  }

  ${CssMediaQueries(BREAKPOINT_MD)} {
    padding: 15px 0;
  }
`

const IconMenu = styled.button`
  margin-top: -2px;
  margin-right: 15px;
`

const MainBar = () => {
  return (
    <MainBarWrapper>
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
    </MainBarWrapper>
  )
}

export default MainBar
