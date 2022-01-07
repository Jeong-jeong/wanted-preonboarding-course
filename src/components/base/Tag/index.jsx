import styled from '@emotion/styled'
import defaultColor from '@assets/colors'
import font from '@assets/fonts'
import PropTypes from 'prop-types'

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${defaultColor.secondary};
  border-radius: 15px;
  background-color: white;

  &.dashBoard {
    height: 30px;
    padding: 0 10px;
    border: 1px solid ${defaultColor.borderLighter};
    ${font.tag};
  }

  &.topBanner {
    position: absolute;
    width: 30px;
    height: 60px;
    color: ${defaultColor.primary};
    opacity: 0.5;
    font-size: 16px;

    & > span {
      width: 1em;
      height: 1em;
    }
  }
`

const Tag = ({ mode, label, children, ...props }) => (
  <Button
    className={mode}
    aria-label={label}
    style={{ ...props.style }}
    {...props}
  >
    <span>{children}</span>
  </Button>
)

Tag.propTypes = {
  mode: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Tag.defaultProps = {
  mode: 'dashBoard',
}

export default Tag
