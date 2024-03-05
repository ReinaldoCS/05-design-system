import { Box, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {}
