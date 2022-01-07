import { Badge, Avatar } from '@components/base'
import { ReactComponent as IconBell } from '@assets/icons/icon-bell.svg'

export default {
  title: 'Base/Badge',
  component: Badge,
}

export const Default = () => {
  return (
    <ul>
      <li style={{ position: 'relative', top: 100 }}>
        <IconBell aria-label="알람" />
        <Badge style={{ top: -4, left: 24 }} />
      </li>
    </ul>
  )
}

export const AvatarBadge = () => {
  return (
    <ul style={{ display: 'flex' }}>
      <li style={{ position: 'relative' }}>
        <button
          style={{
            padding: '0 5px',
            margin: '5px 5px 0 0',
            verticalAlign: 'middle',
          }}
        >
          <IconBell aria-label="알람" />
        </button>
        <Badge style={{ top: -4, left: 24 }} />
      </li>
      <li style={{ position: 'relative' }}>
        <Avatar />
        <Badge style={{ top: -4, left: 24 }} />
      </li>
    </ul>
  )
}
