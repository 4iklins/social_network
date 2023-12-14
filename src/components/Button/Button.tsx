import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import style from './button.module.css';

const Button = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button className={style.button + ' ' + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
