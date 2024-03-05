import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<MultiStepProps>

export const Primary: Story = {
  args: {},
}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
