import React, { FC } from 'react'
import cx from 'classnames'

import * as SC from './styled'

export type LayoutProps = {
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, className, header = null, footer = null } = props

  return (
    <SC.Container className={cx(className)}>
      <>{header}</>
      {children}
      <>{footer}</>
    </SC.Container>
  )
}

export default Layout
