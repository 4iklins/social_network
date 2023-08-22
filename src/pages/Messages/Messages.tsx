import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import style from './messages.module.css';
import User from './User/User';
import MessagesList from './MessagesList';

const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.usersBlock}>
        <ul className={style.usersList}>
          <User id='1' />
          <User id='2' />
        </ul>
      </div>
      <div className={style.messagesWrapper}>
        <div className={style.messagesBlock}>
          <MessagesList />
        </div>
        <div className={style.sendMessage}>
          <InputField type='text' placeholder='Type your message' />
          <Button>Send</Button>
        </div>
      </div>
    </section>
  );
};

export default Messages;
