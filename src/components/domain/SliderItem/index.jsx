import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL, XL, XLhidden } from '@style/MediaQuery'
import { Image } from '@components/base'
import { InformationCard } from '@components/domain'
import { CARD_PD_BASE, CARD_BORDER_RADIUS } from '@utils/constants'
import { typeChecking } from '@utils/functions'
import { useEffect, useLayoutEffect, useState } from 'react'

const SliderBoxWrapper = styled.li`
  float: left;
  width: ${({ width }) => typeChecking(width)};
  height: 100%;
`

const SliderBoxContainer = styled.div`
  position: relative;
  margin: ${CARD_PD_BASE} calc(${CARD_PD_BASE} / 2);
`
const SliderBox = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`
const ImageContainer = styled.div`
  filter: ${({ isCurrent }) =>
    isCurrent ? `brightness(100%)` : `brightness(50%)`};
  height: 183px;
  border-radius: ${CARD_BORDER_RADIUS};

  ${CssMediaQueries(BREAKPOINT_XL)} {
    height: auto;
    border-radius: none;
  }
`
const ImageLink = styled.a`
  display: flex; // FIXME: 임시
  justify-content: center;
  align-items: center;
  height: 100%;

  ${CssMediaQueries(BREAKPOINT_XL)} {
    display: block;
  }
`

const SliderItem = ({
  isCurrent,
  width,
  index,
  link,
  src,
  srcXL,
  title,
  content,
  ...props
}) => {
  const [resizeWidth, setResizeWidth] = useState(window.innerWidth - 80)

  useEffect(() => {
    const handleResize = () => {
      setResizeWidth(window.innerWidth - 80)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <SliderBoxWrapper
      className={isCurrent ? 'currentIndex' : ''}
      data-index={index}
      width={resizeWidth}
      style={{ ...props.style }}
    >
      <SliderBoxContainer>
        <SliderBox>
          <ImageContainer isCurrent={isCurrent}>
            <ImageLink href={link} target="_blank" rel="noreferrer">
              <XLhidden>
                <Image
                  src={src}
                  alt={title}
                  borderRadius={CARD_BORDER_RADIUS}
                  mode="cover"
                />
              </XLhidden>
              <XL>
                <Image
                  src={srcXL}
                  alt={title}
                  borderRadius={CARD_BORDER_RADIUS}
                  mode="cover"
                />
              </XL>
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
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcXL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

SliderItem.defaultProps = {
  isCurrent: false,
}

export default SliderItem
