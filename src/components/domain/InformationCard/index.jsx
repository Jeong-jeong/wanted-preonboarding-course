import PropTypes from 'prop-types'
import { XL } from '@style/MediaQuery'
import { Card } from '@components/base'
import { ReactComponent as IconRightArrow } from '@assets/icons/icon-rightArrow.svg'
import * as Style from './style'

const InfomationCard = ({ title, content }) => {
  return (
    <Style.CardWrapper>
      <Card>
        <Style.InfoContainer>
          <Style.InfoTitle>{title}</Style.InfoTitle>
          <Style.InfoContent>{content}</Style.InfoContent>
        </Style.InfoContainer>
        <XL>
          <Style.Divider />
        </XL>
        <Style.DirectBtn>
          <Style.DirectBtnLabel>
            바로가기 <IconRightArrow width="1em" height="1em" />
          </Style.DirectBtnLabel>
        </Style.DirectBtn>
      </Card>
    </Style.CardWrapper>
  )
}

InfomationCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

InfomationCard.defaultProps = {
  title: '',
  content: '',
}

export default InfomationCard
