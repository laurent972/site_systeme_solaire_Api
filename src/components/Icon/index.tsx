import React, { FC, memo } from 'react'

import * as icons from './icons'
import * as SC from './styled'
import { IconProps } from './types'

const Icon: FC<IconProps> = ({ className, icon, color = 'inherit', style, onClick }) => {
  const iconProps: any = icons[icon]
  if (!iconProps) {
    console.warn('Icon missing :', icon)
    return null
  }
  const { viewBox, id } = iconProps
  const symbolId = id?.replace('-usage', '') ?? ''

  const renderIcon = () => {
    return (
      <SC.Svg className={!onClick ? className : ''} color={color} viewBox={viewBox} style={style}>
        <use xlinkHref={`#${symbolId}`} href={`#${symbolId}`} />
      </SC.Svg>
    )
  }

  if (onClick) {
    return (
      <SC.Button onClick={onClick} className={className}>
        {renderIcon()}
      </SC.Button>
    )
  }

  return renderIcon()
}

export default memo(Icon)
