import { MDEnd, MDhidden } from '@style/MediaQuery'
import { IconBtn, Tag } from '@components/base'
import * as Style from './style'

const AsideMenu = () => {
  return (
    <Style.AsideWrapper>
      <Style.AsideList>
        <Style.AsideItem>
          <IconBtn />
        </Style.AsideItem>
        <Style.AsideItem className="bellItem">
          <IconBtn mode="bell" />
        </Style.AsideItem>
        <MDEnd>
          <Style.AsideItem className="menuItem">
            <IconBtn mode="menu" />
          </Style.AsideItem>
        </MDEnd>
        <MDhidden>
          <Style.AsideItem>
            <IconBtn mode="avatar" />
          </Style.AsideItem>
          <Style.AsideItem divider>
            <Tag label="기업 서비스 바로가기">기업 서비스</Tag>
          </Style.AsideItem>
        </MDhidden>
      </Style.AsideList>
    </Style.AsideWrapper>
  )
}

export default AsideMenu
