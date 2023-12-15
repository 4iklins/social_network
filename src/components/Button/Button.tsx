import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import style from './button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color: 'primary' | 'secondary';
  size: 'small' | 'large';
}

const Button = ({ color, size, children, className, ...props }: ButtonProps) => {
  const styles = style.button + ' ' + className + ' ' + style[color] + ' ' + style[size];
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
