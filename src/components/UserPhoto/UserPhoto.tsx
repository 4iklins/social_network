import cn from 'classnames';
import Icon from '../Icon/Icon';
import style from './userPhoto.module.css';

interface UserPhotoProps {
  avatar: string | null;
  size: 'small' | 'large';
}
const avatarSize = {
  ['small']: {
    h: '24',
    w: '24',
  },
  ['large']: {
    h: '60',
    w: '60',
  },
};

const UserPhoto = ({ avatar, size }: UserPhotoProps) => {
  return avatar ? (
    <img
      className={cn(style.avatar, { [style.small]: size === 'small', [style.large]: size === 'large' })}
      src={avatar}
    />
  ) : (
    <div className={cn(style.userPhoto, { [style.small]: size === 'small', [style.large]: size === 'large' })}>
      <Icon id='user' color='#181818' width={avatarSize[size].w} heigth={avatarSize[size].h} />
    </div>
  );
};

export default UserPhoto;
