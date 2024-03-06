import { Box, Text } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {}
