import icon from './../../assets/img/sprite.svg';

interface IconProps {
  id: 'logo' | 'user';
  width?: string;
  heigth?: string;
  color?: string;
}

const Icon = ({ id, width, heigth, color }: IconProps) => {
  return (
    <svg
      width={width || '24'}
      height={heigth || '24'}
      viewBox='0 -960 960 960'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'>
      <use xlinkHref={`${icon}#${id}`}></use>
    </svg>
  );
};

export default Icon;
