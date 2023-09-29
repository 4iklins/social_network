import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  args: {
    id: 'logo',
    color: 'white',
    heigth: '',
    width: '',
  },
};
