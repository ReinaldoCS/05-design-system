import { Button } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
// import React from 'react'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Enviar',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Big: Story = {
  args: {
    size: 'big',
  },
}
