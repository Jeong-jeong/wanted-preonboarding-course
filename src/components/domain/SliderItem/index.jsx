import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL, SM, SMhidden } from '@style/MediaQuery'
import { Image } from '@components/base'
import { InformationCard } from '@components/domain'
import {
  CARD_PD_BASE,
  CARD_BORDER_RADIUS,
  Slider_PD_BASE,
  MAX_WIDTH,
  Slider_HEIGHT,
  Slider_HEIGHT_XL,
} from '@utils/constants'
import { dragNone } from '@style/GlobalCss'

const SliderBoxWrapper = styled.li`
  float: left;
  height: 100%;
  min-height: 1px;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    width: ${MAX_WIDTH} !important;
    height: ${Slider_HEIGHT_XL};
    padding: 0 12px;
    box-sizing: content-box;
  }
`

const SliderBoxContainer = styled.div`
  position: relative;
  margin: ${CARD_PD_BASE} calc(${CARD_PD_BASE} / 2);

  ${CssMediaQueries(BREAKPOINT_XL)} {
    margin: 0;
  }
`
const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
`
const ImageContainer = styled.div`
  filter: ${({ isCurrent }) =>
    isCurrent ? `brightness(100%)` : `brightness(50%)`};
  height: ${Slider_HEIGHT};
  border-radius: ${CARD_BORDER_RADIUS};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    height: auto;
    border-radius: none;
  }
`
const ImageLink = styled.a`
  ${CssMediaQueries(BREAKPOINT_XL + 'hidden')} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  ${dragNone};
`

const SliderItem = ({
  isCurrent,
  index,
  link,
  src,
  srcMD,
  title,
  content,
  ...props
}) => {
  const sliderItemRef = useRef(null)

  const setWidth = (width) => {
    sliderItemRef.current.style = `width: ${width}px`
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - Slider_PD_BASE * 2)
    }

    setWidth(window.innerWidth - Slider_PD_BASE * 2)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <SliderBoxWrapper
      ref={sliderItemRef}
      className={isCurrent ? 'currentIndex' : ''}
      data-index={index}
      style={{ ...props.style }}
    >
      <SliderBoxContainer>
        <SliderBox>
          <ImageContainer isCurrent={isCurrent}>
            <ImageLink href={link} target="_blank" rel="noreferrer">
              <SM>
                <Image
                  src={src}
                  alt={title}
                  borderRadius={CARD_BORDER_RADIUS}
                  mode="cover"
                  drag={false}
                />
              </SM>
              <SMhidden>
                <Image
                  src={srcMD}
                  alt={title}
                  borderRadius={CARD_BORDER_RADIUS}
                  mode="cover"
                  drag={false}
                />
              </SMhidden>
            </ImageLink>
          </ImageContainer>
          <InformationCard title={title} content={content} />
        </SliderBox>
      </SliderBoxContainer>
    </SliderBoxWrapper>
  )
}

SliderItem.propTypes = {
  isCurrent: PropTypes.bool,
  index: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcMD: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

SliderItem.defaultProps = {
  isCurrent: false,
}

export default React.memo(SliderItem)
