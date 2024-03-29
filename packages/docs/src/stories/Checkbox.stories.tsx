import { Box, Checkbox, CheckboxProps, Text } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    onClick: {
      action: 'checked',
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        <Story />
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<CheckboxProps>

export const Primary: Story = {}
