import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import Icon from '.'
import { IconProps, Icons } from './types'

export default defaultExport({
  title: 'Components/Icon',
  component: Icon,
  viewport: null,
  containerStyle: { padding: '3rem' },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(Icons),
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    width: {
      control: {
        type: 'range',
        step: 2,
        min: 15,
        max: 200,
      },
    },
  },
})

// ALL

const ListSC = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ListItemSC = styled.div<{ width: number }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${({ width }) => `${width + 80}px`};
  margin-bottom: 30px;

  p {
    font-size: 13px;
    font-family: sans-serif;
    text-align: center;
    margin-top: 15px;
  }
`

const IconSC = styled(Icon)<{ width: number }>`
  width: ${({ width }) => width}px;
`

export const All: Story<IconProps & { width: number }> = (arg) => {
  return (
    <ListSC>
      {Object.keys(Icons).map((key) => (
        <ListItemSC key={key} width={arg.width}>
          <IconSC key={key} {...arg} icon={Icons[key as Icons]} />
          <p>{key}</p>
        </ListItemSC>
      ))}
    </ListSC>
  )
}

All.args = {
  width: 42,
  color: '#000',
}

All.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
}

// SIMPLE

export const Simple: Story<IconProps & { width: number }> = (arg) => <IconSC {...arg} />

Simple.args = {
  icon: Icons.bed,
  width: 100,
}

Simple.parameters = {
  layout: 'centered',
}

// COLORED

const ColoredHoverSC = styled(IconSC)`
  transition: color 0.4s ease;

  &:hover {
    color: red;
  }
`

export const HoverTransition: Story<IconProps & { width: number }> = (arg) => (
  <ColoredHoverSC {...arg} />
)

HoverTransition.args = {
  icon: Icons.apple,
  color: 'blue',
  width: 100,
}

HoverTransition.parameters = {
  layout: 'centered',
}
