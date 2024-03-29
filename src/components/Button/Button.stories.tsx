import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonDemo: Story = {
  args: {
    children: 'Button',
  },
};
