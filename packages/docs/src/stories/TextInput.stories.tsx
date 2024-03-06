import { Box, Text, TextInput, TextInputProps } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
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
type Story = StoryObj<TextInputProps>

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

export const WithPrefix: Story = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}
