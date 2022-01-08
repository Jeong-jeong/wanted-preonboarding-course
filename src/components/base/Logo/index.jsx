import styled from '@emotion/styled'

const IconLogo = styled.i`
  cursor: pointer;
  &::before {
    font-size: 17px;
  }
`

const Logo = () => (
  <IconLogo className="icon-logo_new" aria-label="원티드 로고" />
)

export default Logo
