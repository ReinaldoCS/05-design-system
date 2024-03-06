import { Text, TextProps } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dozlor, sit amet consectetur adipisicing elit. Possimus libero, alias dignissimos, odio explicabo nam temporibus earum magnam enim, modi officia deserunt ut illo est totam ex aperiam perferendis cupiditate?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
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
