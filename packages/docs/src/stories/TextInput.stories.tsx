import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/TextInput',
  component: TextInput,
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
  },
}
