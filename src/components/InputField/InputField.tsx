import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import style from './inputField.module.css';
import { MessageInputRef } from '../../pages/Messages/Messages';

interface InputPropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const InputField = forwardRef<MessageInputRef, InputPropsType>(({ className, ...props }, ref) => {
  return <input className={style.inputField + ' ' + className} {...props} ref={ref} />;
});

export default InputField;
