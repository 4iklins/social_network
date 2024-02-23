import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './inputField.module.css';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

interface InputPropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  input?: WrappedFieldInputProps;
  meta?: WrappedFieldMetaProps;
}

const InputField = ({ name, className, input, meta, ...props }: InputPropsType) => {
  const showError = meta?.touched && meta?.error;
  const errorStyle = showError ? style.errorField : undefined;
  const styles = style.inputField + ' ' + className + ' ' + errorStyle;
  return (
    <div className={style.inputWrapper}>
      <input className={styles} {...input} {...props} />
      {showError && <div className={style.error}>{meta.error}</div>}
    </div>
  );
};

export default InputField;
