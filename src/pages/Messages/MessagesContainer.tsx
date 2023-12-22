import { connect } from 'react-redux';
import Messages from './Messages';
import { StateType } from '../../redux/store';
import { MessagesPageType, enterMessageTextAC, sendMessageAC } from '../../redux/messages-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const mapStateToProps = (state: StateType): MessagesPageType => {
  return {
    users: state.messagesPage.users,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  };
};
const mapDispatchToProps = {
  sendMessage: sendMessageAC,
  enterMessageText: enterMessageTextAC,
};
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
  sendMessage: (messageText: string, dialogId: string) => void;
  enterMessageText: (text: string) => void;
};
type PathParamsType = {
  id: string;
};
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
export type MessagesPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Messages));
