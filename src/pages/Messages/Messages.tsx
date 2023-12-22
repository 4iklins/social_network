import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import style from './messages.module.css';
import MokUser from './MokUser/MokUser';
import MessagesList from './MessagesList';
import { Route } from 'react-router-dom';
import { useRef } from 'react';
import { MessagesPropsType } from './MessagesContainer';

export type MessageInputRef = HTMLInputElement;

const Messages = ({ users, messages, newMessageText, match, enterMessageText, sendMessage }: MessagesPropsType) => {
  const ref = useRef<MessageInputRef>(null);
  const onInputChange = () => {
    if (ref.current) enterMessageText(ref.current.value);
  };
  const onSendMessage = () => {
    sendMessage(newMessageText, match.params.id);
  };

  return (
    <section className={style.messages}>
      <div className={style.usersBlock}>
        <ul className={style.usersList}>
          {users.map(user => (
            <MokUser id={user.id} name={user.name} avatar={user.avatar} key={user.id} />
          ))}
        </ul>
      </div>
      <Route
        path='/messages/:id'
        render={() => (
          <div className={style.messagesWrapper}>
            <div className={style.messagesBlock}>
              <MessagesList messages={messages[match.params.id]} />
            </div>
            <div className={style.sendMessage}>
              <InputField
                type='text'
                placeholder='Type your message'
                ref={ref}
                onChange={onInputChange}
                value={newMessageText}
              />
              <Button onClick={onSendMessage} color='secondary' size='large'>
                Send
              </Button>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default Messages;
