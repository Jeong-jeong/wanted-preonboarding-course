import styled from '@emotion/styled'
import {
  CssMediaQueries,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  SM,
  SMhidden,
} from '@style/MediaQuery'
import { IconKeyword } from '@components/base'

const NavList = styled.ul`
  ${CssMediaQueries(BREAKPOINT_MD)} {
    display: flex;
    justify-content: space-evenly;
  }
`
const NavItem = styled.li``

const NavLink = styled.a`
  position: relative;
  vertical-align: middle;
  padding: 15px;
  display: inline-block;

  ${CssMediaQueries(BREAKPOINT_SM)} {
    padding: 11px 10px 19px;
  }

  ${CssMediaQueries(BREAKPOINT_MD)} {
    font-size: 13px;
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
          <NavLink aria-label={showNavItemSM}>{showNavItemSM}</NavLink>
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
