import PropTypes from 'prop-types'
import { typeChecking } from '@utils/functions'
import { css } from '@emotion/core'

const Image = ({ block, width, height, src, alt, mode, ...props }) => {
  const ImageStyle = css`
    display: ${block} ? 'block' : 'inline-block';
    width: ${typeChecking(width)};
    height: ${typeChecking(height)};
    object-fit: ${mode};
  `

  return <img src={src} alt={alt} css={ImageStyle} {...props} />
}

Image.propTypes = {
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['fill', 'cover', 'none', 'contain']),
}

Image.defaultProps = {
  src: '',
  block: false,
  width: '100%',
  height: '100%',
  mode: 'fill',
}

export default Image