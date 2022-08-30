import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import Layout, { LayoutProps } from './index'
import { layoutArgs } from './mocks'

export default defaultExport({
  title: 'Layouts/Layout',
  component: Layout,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
})

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const LayoutPage = Template.bind({})

LayoutPage.args = layoutArgs
