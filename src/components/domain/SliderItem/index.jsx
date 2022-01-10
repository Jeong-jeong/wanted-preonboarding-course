import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { CssMediaQueries, BREAKPOINT_XL, XL, XLhidden } from '@style/MediaQuery'
import { Image } from '@components/base'
import { InformationCard } from '@components/domain'
import { typeChecking } from '@utils/functions'
import { cardRadius } from '@style/GlobalCss'

const SliderBox = styled.div`
  position: relative;
  width: ${({ width }) => typeChecking(width)};
  text-align: center;
`
const ImageContainer = styled.div`
  filter: brightness(50%);
  height: 183px;
  ${cardRadius};

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

const SliderItem = ({ width, src, srcXL, title, content, ...props }) => {
  return (
    <SliderBox width={width}>
      <ImageContainer>
        <ImageLink>
          <XLhidden>
            <Image src={src} alt={title} borderRadius={4} mode="cover" />
          </XLhidden>
          <XL>
            <Image src={srcXL} alt={title} borderRadius={4} mode="cover" />
          </XL>
        </ImageLink>
      </ImageContainer>
      <InformationCard title={title} content={content} />
    </SliderBox>
  )
}

SliderItem.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}

SliderItem.defaultProps = {
  width: '100%',
  src: '',
  title: '',
  content: '',
}

export default SliderItem
