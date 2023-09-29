import { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'InputField',
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Input: Story = {
  args: {
    type: 'text',
  },
};
