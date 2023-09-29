import { Meta, StoryObj } from '@storybook/react';
import UserPhoto from './UserPhoto';
import avatar from '../../assets/img/usersAvatars/avatar.jpg';

const meta: Meta<typeof UserPhoto> = {
  title: 'UserPhoto',
  component: UserPhoto,
};
export default meta;

type Story = StoryObj<typeof UserPhoto>;

export const Photo: Story = {
  args: {
    avatar,
    size: 'small',
  },
};
