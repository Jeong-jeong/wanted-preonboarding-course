import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const BREAKPOINT_XL = 'xl'
export const BREAKPOINT_LG = 'lg'
export const BREAKPOINT_MD = 'md'
export const BREAKPOINT_SM = 'sm'

export const breakpoints = {
  xl: 1200,
  lg: 1100,
  md: 992,
  sm: 768,
}

export const isXL = (width) => {
  return width >= breakpoints[BREAKPOINT_XL]
}

export const SM = ({ children }) => {
  const isSm = useMediaQuery({
    query: `(max-width:${breakpoints[BREAKPOINT_SM] - 1}px)`,
  })
  return <>{isSm && children}</>
}

export const SMhidden = ({ children }) => {
  const isSm = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_SM] + 1}px)`,
  })
  return <>{isSm && children}</>
}

export const MD = ({ children }) => {
  const isMd = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_SM]}px) and (max-width:${
      breakpoints[BREAKPOINT_MD] - 1
    }px)`,
  })
  return <>{isMd && children}</>
}

export const MDEnd = ({ children }) => {
  const isMd = useMediaQuery({
    query: `(max-width:${breakpoints[BREAKPOINT_MD]}px)`,
  })
  return <>{isMd && children}</>
}

export const MDhidden = ({ children }) => {
  const isMd = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_MD] + 1}px)`,
  })
  return <>{isMd && children}</>
}

export const LG = ({ children }) => {
  const isLg = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_MD]}px) and (max-width:${breakpoints[BREAKPOINT_LG]}px)`,
  })
  return <>{isLg && children}</>
}

export const MDTOXL = ({ children }) => {
  const isLg = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_MD]}px) and (max-width:${breakpoints[BREAKPOINT_XL]}px)`,
  })
  return <>{isLg && children}</>
}

export const LGhidden = ({ children }) => {
  const isLg = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_LG] + 1}px)`,
  })
  return <>{isLg && children}</>
}

export const XL = ({ children }) => {
  const isXl = useMediaQuery({
    query: `(min-width:${breakpoints[BREAKPOINT_XL]}px)`,
  })
  return <>{isXl && children}</>
}

export const XLhidden = ({ children }) => {
  const isXl = useMediaQuery({
    query: `(max-width:${breakpoints[BREAKPOINT_XL] - 1}px)`,
  })
  return <>{isXl && children}</>
}

export const CssMediaQueries = (screen) => {
  switch (screen) {
    case 'sm':
      return `@media (max-width:${breakpoints[screen] - 1}px)`
    case 'md':
      return `@media (min-width:${breakpoints['sm']}px) and (max-width:${
        breakpoints[screen] - 1
      }px)`
    case 'mdend':
      return `@media (max-width:${breakpoints['md']}px)`
    case 'lg':
      return `@media (min-width:${breakpoints['md']}px) and (max-width:${breakpoints[screen]}px)`
    case 'mdxl':
      return `@media (min-width:${breakpoints['md']}px) and (max-width:${breakpoints['xl']}px)`
    case 'xl':
      return `@media (min-width:${breakpoints[screen]}px)`
    case 'xlhidden':
      return `@media (max-width:${breakpoints['xl'] - 1}px)`
    default:
      throw new Error('Not applicable to breakpoints')
  }
}
