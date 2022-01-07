import styled from '@emotion/styled'
import defaultColor from '@assets/colors'
import PropTypes from 'prop-types'

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${defaultColor.secondary};
  border-radius: 15px;
  background-color: white;

  &.dashBoard {
    height: 30px;
    padding: 0 10px;
    border: 1px solid ${defaultColor.borderLighter};
  }

  &.topBanner {
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

const Tag = ({ mode, children, ...props }) => (
  <Button className={mode} style={{ ...props.style }} {...props}>
    <span>{children}</span>
  </Button>
)

Tag.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Tag.defaultProps = {
  mode: 'dashBoard',
}

export default Tag
