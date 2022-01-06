export const BREAKPOINT_LG = 'lg'
export const BREAKPOINT_MD = 'md'
export const BREAKPOINT_SM = 'sm'

export const breakpoints = {
  lg: 1024,
  md: 768,
}

export const MediaQueries = (key) => {
  return `@media (max-width:${breakpoints[key]}px)`
}

/**
 * 미디어쿼리 사용방법 -> Styled 컴포넌트 안에서 호출
 *
 * ex)
 * ${mediaQuries(BREAKPOINT_PC)}{
 *  PC Size에 맞는 SCSS
 * }
 */
