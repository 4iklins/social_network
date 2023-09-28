import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import style from './messages.module.css';
import User from './User/User';
import MessagesList from './MessagesList';
import { MessagesPageType } from '../../data/state';

const Messages = ({ users, messages, newMessageText }: MessagesPageType) => {
  return (
    <section className={style.messages}>
      <div className={style.usersBlock}>
        <ul className={style.usersList}>
          {users.map(user => (
            <User id={user.id} name={user.name} avatar={user.avatar} key={user.id} />
          ))}
        </ul>
      </div>
      <div className={style.messagesWrapper}>
        <div className={style.messagesBlock}>
          <MessagesList messages={messages['0']}/>
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
