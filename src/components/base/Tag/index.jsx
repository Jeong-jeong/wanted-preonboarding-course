import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { breakpoints, BREAKPOINT_XL } from '@style/MediaQuery'
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
    top: 120px;
    width: 30px;
    height: 60px;
    color: ${defaultColor.primary};
    opacity: 0.5;
    font-size: 16px;
    z-index: 1;

    & > span {
      width: 1em;
      height: 1em;
    }

    &.nextArrow {
      right: calc((100% - ${breakpoints[BREAKPOINT_XL]}px) / 2);
    }

    &.prevArrow {
      left: calc((100% - ${breakpoints[BREAKPOINT_XL] + 10}px) / 2);
    }
  }
`

const Tag = forwardRef(({ mode, label, children, ...props }, ref) => (
  <Button
    ref={ref}
    className={mode}
    aria-label={label}
    style={{ ...props.style }}
    {...props}
  >
    <span>{children}</span>
  </Button>
))

Tag.propTypes = {
  mode: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Tag.defaultProps = {
  mode: 'dashBoard',
}

export default Tag
