import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IconDemo: Story = {
  args: {
    id: 'logo',
    color: 'white',
    heigth: '',
    width: '',
  },
};
