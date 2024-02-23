import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
import style from './loginform.module.css';
import { requiredField } from '../../../utils/validators/requiredField';
import { email } from '../../../utils/validators/email';
import { FormData } from '../../../api/auth-api';

type LoginFormProps = {
  captcha: string;
  login: (data: FormData) => void;
};

const LoginForm = (props: InjectedFormProps<FormData, LoginFormProps> & LoginFormProps) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      <Field name='email' component={InputField} placeholder='email' validate={[requiredField, email]} />
      <Field name='password' component={InputField} placeholder='password' type='password' validate={requiredField} />
      <div className={style.remember}>
        <span>Remember me</span>
        <span>
          <Field name='rememberMe' component={InputField} type='checkbox' />
        </span>
      </div>
      {!!props.captcha && (
        <div>
          <img src={props.captcha} />
          <Field name='captcha' component={InputField} placeholder='captcha' validate={requiredField} />
        </div>
      )}
      <Button color='primary' size='large' className={style.submit}>
        Login
      </Button>
    </form>
  );
};

export default reduxForm<FormData, LoginFormProps>({ form: 'login' })(LoginForm);
