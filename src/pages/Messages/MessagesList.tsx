import Message from './Message/Message';
import style from './messages.module.css';

const MessagesList = () => {
  return (
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
  );
};

export default MessagesList;
