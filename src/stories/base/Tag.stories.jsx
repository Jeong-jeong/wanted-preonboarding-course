import { Tag } from '@components/base'
import styled from '@emotion/styled'
import { ReactComponent as IconRightArrow } from '@assets/icons/icon-rightArrow.svg'
import { ReactComponent as IconLeftArrow } from '@assets/icons/icon-leftArrow.svg'

const Wrapper = styled.div`
  position: relative;
  background-color: black;
  height: 100vh;

  & > button:first-of-type {
    margin-left: 50px;
  }
`

export default {
  title: 'Base/Tag',
  component: Tag,
}

export const DashBoard = () => <Tag>기업 서비스</Tag>
export const TopBanner = () => {
  return (
    <Wrapper>
      <Tag className="topBanner">
        <IconRightArrow />
      </Tag>
      <Tag className="topBanner">
        <IconLeftArrow />
      </Tag>
    </Wrapper>
  )
}
