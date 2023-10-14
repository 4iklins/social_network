import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import style from './button.module.css';

const Button = ({
  children,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
