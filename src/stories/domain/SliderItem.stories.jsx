import { SliderItem } from '@components/domain'

export default {
  title: 'Domain/SliderItem',
  component: SliderItem,
  argTypes: {
    width: { control: 'number' },
    src: { control: 'string' },
    title: { control: 'string' },
    content: { control: 'string' },
  },
}

export const Default = (args) => (
  <SliderItem
    src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.thumb_1006_280.jpg"
    alt="나도 개발자 되고 싶다"
    title="나도 개발자 되고 싶다"
    content="프론트엔드 무료 교육과정 참여하기"
    {...args}
  />
)
