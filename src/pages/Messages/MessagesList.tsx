import { message } from 'antd';
import { UserType } from '../../data/state';
import Message from './Message/Message';
import style from './messages.module.css';

const MessagesList = ({ user }: { user: UserType }) => {
  return (
    <ul className={style.messagesList}>
      {user.messages?.map(message => (
        <Message avatar={user.avatar} isMe={message.isMe} message={message.message} key={user.id} />
      ))}
    </ul>
  );
};

export default MessagesList;
