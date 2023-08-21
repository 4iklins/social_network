import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import style from './messages.module.css';
import User from './User/User';
import Message from './Message/Message';

const Messages = () => {
  return (
    <section className={style.messages}>
      <div className={style.usersBlock}>
        <ul className={style.usersList}>
          <User />
          <User />
          <User />
        </ul>
      </div>
      <div className={style.messagesWrapper}>
        <div className={style.messagesBlock}>
          <ul className={style.messagesList}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </ul>
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
