import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './inputField.module.css';

interface InputPropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const InputField = ({ ...props }: InputPropsType) => {
  return <input className={style.inputField} {...props} />;
};

export default InputField;
