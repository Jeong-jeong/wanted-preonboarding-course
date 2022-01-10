import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { typeChecking } from '@utils/functions'
import { CARD_BORDER_RADIUS } from '@utils/constants'

const Card = ({
  width,
  height,
  borderRadius,
  backColor,
  children,
  ...props
}) => {
  const CardStyle = css`
    width: ${typeChecking(width)};
    height: ${typeChecking(height)};
    background-color: ${backColor};
    border-radius: ${borderRadius};
  `

  return (
    <div css={CardStyle} style={{ ...props.style }}>
      {children}
    </div>
  )
}

Image.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Image.defaultProps = {
  width: '100%',
  height: '100%',
  backColor: 'white',
  borderRadius: CARD_BORDER_RADIUS,
}

export default Card
