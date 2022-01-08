import { AsideWrapper, AsideList, AsideItem } from './style'
import { IconBtn, Tag } from '@components/base'
import { SM, SMhidden } from '@style/MediaQuery'

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
        <SM>
          <AsideItem>
            <IconBtn mode="menu" />
          </AsideItem>
        </SM>
        <SMhidden>
          <AsideItem>
            <IconBtn mode="avatar" />
          </AsideItem>
          <AsideItem divider>
            <Tag label="기업 서비스 바로가기">기업 서비스</Tag>
          </AsideItem>
        </SMhidden>
      </AsideList>
    </AsideWrapper>
  )
}

export default AsideMenu
