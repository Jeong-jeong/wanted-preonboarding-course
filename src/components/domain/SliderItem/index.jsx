import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { SM, SMhidden, isXL } from '@style/MediaQuery'
import { Image } from '@components/base'
import { InformationCard } from '@components/domain'
import { CARD_BORDER_RADIUS, Slider_PD_BASE } from '@utils/constants'
import * as Style from './style'

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
    if (!isXL(innerWidth)) {
      sliderItemRef.current.style = `width: ${width}px`
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(innerWidth - Slider_PD_BASE * 2)
    }

    setWidth(innerWidth - Slider_PD_BASE * 2)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Style.SliderBoxWrapper
      ref={sliderItemRef}
      className={isCurrent ? 'currentIndex' : ''}
      data-index={index}
      style={{ ...props.style }}
    >
      <Style.SliderBoxContainer>
        <Style.SliderBox>
          <Style.ImageContainer isCurrent={isCurrent}>
            <Style.ImageLink href={link} target="_blank" rel="noreferrer">
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
            </Style.ImageLink>
          </Style.ImageContainer>
          <InformationCard title={title} content={content} />
        </Style.SliderBox>
      </Style.SliderBoxContainer>
    </Style.SliderBoxWrapper>
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
