import { AsideWrapper, AsideList, AsideItem } from './style'
import { MDEnd, MDhidden } from '@style/MediaQuery'
import { IconBtn, Tag } from '@components/base'

const AsideMenu = () => {
  return (
    <AsideWrapper>
      <AsideList>
        <AsideItem>
          <IconBtn />
        </AsideItem>
        <AsideItem>
          <IconBtn mode="bell" />
        </AsideItem>
        <MDEnd>
          <AsideItem className="menuItem">
            <IconBtn mode="menu" />
          </AsideItem>
        </MDEnd>
        <MDhidden>
          <AsideItem>
            <IconBtn mode="avatar" />
          </AsideItem>
          <AsideItem divider>
            <Tag label="기업 서비스 바로가기">기업 서비스</Tag>
          </AsideItem>
        </MDhidden>
      </AsideList>
    </AsideWrapper>
  )
}

export default AsideMenu
