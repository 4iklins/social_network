import icon from './../../assets/img/sprite.svg';

interface IconProps {
  id: string;
  width?: string;
  heigth?: string;
  viewBox?: string;
  color?: string;
}

const Icon = ({ id, width, heigth, viewBox, color }: IconProps) => {
  return (
    <svg
      width={width || '50'}
      height={heigth || '50'}
      viewBox={viewBox || '0 0 50 50'}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'>
      <use xlinkHref={`${icon}#${id}`}></use>
    </svg>
  );
};

export default Icon;
