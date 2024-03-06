import { Avatar, AvatarProps } from '@ignight-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/reinaldocs.png',
    alt: 'Reinaldo Correia',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
