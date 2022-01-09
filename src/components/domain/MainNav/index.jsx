import styled from '@emotion/styled'
import {
  CssMediaQueries,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  SM,
  SMhidden,
} from '@style/MediaQuery'
import { IconKeyword } from '@components/base'
import {
  GNB_PD_HORIZONTAL,
  GNB_PD_VETCITAL,
  GNB_HEIGHT_SM,
  MAINBAR_HEIGHT,
} from '@utils/constants'
import { borderSelectedNav } from '@style/GlobalCss'

const NavList = styled.ul`
  ${CssMediaQueries(BREAKPOINT_MD)} {
    height: calc(${GNB_HEIGHT_SM} - ${MAINBAR_HEIGHT});
    margin-right: 30px;
  }

  ${CssMediaQueries(BREAKPOINT_LG)} {
    display: flex;
    justify-content: space-evenly;
    flex: 1 1;
  }
`
const NavItem = styled.li``

const NavLink = styled.a`
  position: relative;
  vertical-align: middle;
  padding: ${GNB_PD_VETCITAL};
  display: inline-block;

  ${CssMediaQueries(BREAKPOINT_SM)} {
    padding: 11px 10px 19px;
  }

  ${CssMediaQueries(BREAKPOINT_MD)} {
    padding: 11px 10px 19px;
    font-size: 13px;
  }

  &[class*='homeBtn'] {
    padding-left: ${GNB_PD_HORIZONTAL};
    ${borderSelectedNav}
  }
`

const showNavItemSM = '홈'
const showNavItemSMMD = ['채용', '이벤트']
const showNavItemMD = [
  // [navItem, iconkeyWord]
  ['직군별 연봉', false],
  ['이력서', false],
  ['커뮤니티', 'new'],
  ['프리랜서', false],
  ['AI 합격예측', 'Beta'],
]

const MainNav = () => {
  return (
    <NavList>
      <SM>
        <NavItem>
          <NavLink className="homeBtn" aria-label={showNavItemSM}>
            {showNavItemSM}
          </NavLink>
        </NavItem>
      </SM>

      {showNavItemSMMD.map((item) => (
        <NavItem key={item}>
          <NavLink aria-label={item}>{item}</NavLink>
        </NavItem>
      ))}

      <SMhidden>
        {showNavItemMD.map(([item, icon]) => (
          <NavItem key={item}>
            <NavLink aria-label={item}>
              {item}
              {icon && <IconKeyword txt={icon} />}
            </NavLink>
          </NavItem>
        ))}
      </SMhidden>
    </NavList>
  )
}

export default MainNav
