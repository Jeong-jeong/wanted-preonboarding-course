import { IconKeyword } from '@components/base'
import styled from '@emotion/styled'

export default {
  title: 'Base/IconKeyword',
  component: IconKeyword,
}

const Link = styled.a`
  position: relative;
  width: 100%;
  padding: 15px;
`

export const Default = () => {
  return (
    <ul>
      <li>
        <Link>
          커뮤니티
          <IconKeyword txt="New" />
        </Link>
      </li>
    </ul>
  )
}
