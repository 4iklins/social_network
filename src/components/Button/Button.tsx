import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import style from './button.module.css';

const Button = ({ children }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
