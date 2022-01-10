import { Card } from '@components/base'

export default {
  title: 'Base/Card',
  component: Card,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
    backColor: { control: 'color' },
  },
}

export const Default = (args) => (
  <div style={{ backgroundColor: 'blue' }}>
    <Card {...args}>hello</Card>
  </div>
)
