import style from './inputField.module.css';

const InputField = () => {
  return <input className={style.inputField} type='text' placeholder='Type something...' />;
};

export default InputField;
