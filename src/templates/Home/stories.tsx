import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import HomeTemplate, { HomeTemplateProps } from './index'
import { homeArgs } from './mocks'

export default defaultExport({
  title: 'Templates/Home',
  component: HomeTemplate,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
})

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate {...args} />

export const Default = Template.bind({})
Default.args = homeArgs
