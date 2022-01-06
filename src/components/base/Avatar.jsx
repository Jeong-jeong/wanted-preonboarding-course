import styled from '@emotion/styled'
import profileDefault from '@assets/images/profile_default.png'
import defaultColor from '@assets/colors'

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${defaultColor.borderLighter};
`

const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-image: url(${profileDefault});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

const Avatar = ({ ...props }) => (
  <AvatarWrapper style={{ ...props.style }}>
    <AvatarImage />
  </AvatarWrapper>
)

export default Avatar
