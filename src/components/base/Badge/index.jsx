import styled from '@emotion/styled'
import { ReactComponent as IconBadge } from '@assets/icons/icon-badge.svg'
import { typeChecking } from '@utils/functions'
import PropTypes from 'prop-types'
import defaultColor from '@assets/colors'

const BadgeContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 24px;
  width: ${({ size }) => typeChecking(size)};
  height: ${({ size }) => typeChecking(size)};
  background-color: ${({ color }) => color};
  border-radius: 5px;
`

const Badge = ({ size, color, ...props }) => {
  return (
    <BadgeContainer
      size={size}
      color={color}
      aria-hidden
      style={{ ...props.style }}
      {...props}
    >
      <IconBadge />
    </BadgeContainer>
  )
}

Badge.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
}

Badge.defaultProps = {
  size: 13,
  color: defaultColor.blue,
}

export default Badge
