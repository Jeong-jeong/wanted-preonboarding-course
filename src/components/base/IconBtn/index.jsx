import { Badge, Avatar } from '@components/base'
import { ReactComponent as IconBell } from '@assets/icons/icon-bell.svg'
import { ReactComponent as IconSearch } from '@assets/icons/icon-search.svg'
import { ReactComponent as IconAsideMenu } from '@assets/icons/icon-asideMenu.svg'
import PropTypes from 'prop-types'

const modeInfo = {
  search: '검색 버튼',
  bell: '알림 버튼',
  menu: '내 정보 메뉴 버튼',
  avatar: '프로필 버튼',
}

const IconBtn = ({ mode = 'search' }) => {
  let Component
  switch (mode) {
    case 'search':
      Component = <IconSearch />
      break
    case 'bell':
      Component = (
        <>
          <IconBell />
          <Badge />
        </>
      )
      break
    case 'menu':
      Component = <IconAsideMenu />
      break
    case 'avatar':
      Component = (
        <>
          <Avatar />
          <Badge style={{ left: 33 }} />
        </>
      )
      break
    default:
      throw new Error('Not applicable to mode')
  }

  return <button aria-label={modeInfo[mode]}>{Component}</button>
}

IconBtn.propTypes = {
  mode: PropTypes.string,
}

IconBtn.defaultProps = {
  mode: 'search',
}

export default IconBtn
