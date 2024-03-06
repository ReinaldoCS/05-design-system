import { Box, Text, TextArea, TextAreaProps } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextAreaProps> = {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Label example</Text>
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type something',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
