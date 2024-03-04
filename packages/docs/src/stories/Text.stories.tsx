import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero, alias dignissimos, odio explicabo nam temporibus earum magnam enim, modi officia deserunt ut illo est totam ex aperiam perferendis cupiditate?',
  },
}

export default meta
type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Custom text',
    as: 'strong',
  },
}
