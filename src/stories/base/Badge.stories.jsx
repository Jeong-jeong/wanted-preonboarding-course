import { Badge } from '@components/base'
import { ReactComponent as IconBell } from '@assets/icons/icon-bell.svg'

export default {
  title: 'Base/Badge',
  component: Badge,
}

export const Default = () => {
  return (
    <ul>
      <li style={{ position: 'relative', listStyle: 'none', top: 100 }}>
        <IconBell aria-label="알람" />
        <Badge style={{ top: -4, left: 24 }} />
      </li>
    </ul>
  )
}
