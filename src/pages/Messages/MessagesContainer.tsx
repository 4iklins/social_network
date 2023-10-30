import { connect } from 'react-redux';
import Messages from './Messages';
import { StateType } from '../../redux/store';
import { MessagesPageType, enterMessageTextAC, sendMessageAC } from '../../redux/messages-reducer';

const mapStateToProps = (state: StateType): MessagesPageType => {
  return {
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  };
};
const mapDispatchToProps = {
  sendMessage: sendMessageAC,
  enterMessageText:enterMessageTextAC
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
