import { IconBtn } from '@components/base'

export default {
  title: 'Base/IconBtn',
  component: IconBtn,
  argTypes: {
    mode: {
      options: ['search', 'bell', 'menu', 'avatar'],
      control: { type: 'radio' },
    },
  },
}

export const Default = (args) => <IconBtn {...args} />

export const Bell = (args) => <IconBtn mode="bell" {...args} />

export const Menu = (args) => <IconBtn mode="menu" {...args} />
