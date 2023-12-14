
import Message from './Message/Message';
import style from './messages.module.css';
import { MessageType } from '../../redux/messages-reducer';

const MessagesList = ({ messages }: { messages: MessageType[] }) => {
  return (
    <ul className={style.messagesList}>
      {messages?.map(message => (
        <Message avatar={message.avatar} isMe={message.isMe} message={message.message} key={message.id} />
      ))}
    </ul>
  );
};

export default MessagesList;
