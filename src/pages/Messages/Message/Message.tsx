import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import style from './message.module.css';
import cn from 'classnames';

const Message = ({ avatar, isMe, message }: { avatar: string; isMe: boolean; message: string }) => {
  return (
    <li className={cn(style.message, { [style.messageIsMe]: isMe })}>
      <div className={style.wrapper}>
        <UserPhoto avatar={avatar} />
        <div className={style.name}>Andrei</div>
      </div>
      <p className={style.text}>{message}</p>
    </li>
  );
};

export default Message;
