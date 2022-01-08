import React from 'react'
import styled from '@emotion/styled'
import defaultColor from '@assets/colors'

const IconKeywordWrapper = styled.em`
  position: absolute;
  top: 10px;
  right: -5px;
`

const IconKeyword = ({ txt, ...props }) => (
  <IconKeywordWrapper style={{ ...props.style }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="11"
      viewBox="0 0 18 11"
    >
      <g
        fill="none"
        fillRule="evenodd"
        fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
        fontSize="9"
        fontWeight="500"
      >
        <g fill={defaultColor.blue}>
          <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
            <tspan x="0" y="8">
              {txt}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  </IconKeywordWrapper>
)

export default IconKeyword
