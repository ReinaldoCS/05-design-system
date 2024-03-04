import { Box } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {}
