import { state } from './../data/state';
import bakinovski from '../assets/img/usersAvatars/bakinovski.jpg';
import kiedis from '../assets/img/usersAvatars/kiedis.webp';
import flea from '../assets/img/usersAvatars/flea.jpg';
import avatar from '../assets/img/usersAvatars/avatar.jpg';

export interface MessagesPageType {
  users: MokUserType[];
  messages: MessagesType;
  newMessageText: string;
}
export interface MessagesType {
  [key: string]: MessageType[];
}

export interface MokUserType {
  id: string;
  name: string;
  avatar: string;
}
export interface MessageType {
  id: string;
  isMe: boolean;
  message: string;
  avatar: string;
}
const avatars = {
  ['0']: bakinovski,
  ['1']: kiedis,
  ['2']: '',
  ['3']: flea,
  ['4']: '',
  ['5']: '',
};

const initialState: MessagesPageType = {
  users: [
    {
      id: '0',
      name: 'Andrei Bakinovskiy',
      avatar: bakinovski,
    },
    {
      id: '1',
      name: 'Anthony Kiedis',
      avatar: kiedis,
    },
    {
      id: '2',
      name: 'Chad Smith',
      avatar: '',
    },
    {
      id: '3',
      name: 'Flea',
      avatar: flea,
    },
    {
      id: '4',
      name: 'John Frusciante',
      avatar: '',
    },
    {
      id: '5',
      name: 'Neil Degrasse Tyson',
      avatar: '',
    },
  ],
  messages: {
    ['0']: [
      {
        id: '1',
        isMe: false,
        message:
          'Bor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
        avatar: bakinovski,
      },
      {
        id: '2',
        isMe: true,
        message:
          'Backinofsky!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
        avatar: avatar,
      },
    ],
    ['1']: [
      {
        id: '1',
        isMe: false,
        message: 'Yo man!',
        avatar: kiedis,
      },
      {
        id: '2',
        isMe: true,
        message: 'Otherside ',
        avatar: avatar,
      },
    ],
    ['2']: [],
    ['3']: [
      {
        id: '1',
        isMe: false,
        message: 'Yo man!',
        avatar: flea,
      },
      {
        id: '2',
        isMe: true,
        message: 'Yo Flea!',
        avatar: avatar,
      },
    ],
    ['4']: [],
    ['5']: [],
  },
  newMessageText: '',
};

export type SendMessageAT = {
  type: 'SEND-MESSAGE';
  messageText: string;
  dialogId: string;
};
export type EnterMessageTextAT = {
  type: 'ENTER-MESSAGE-TEXT';
  text: string;
};
type ActionsType = SendMessageAT | EnterMessageTextAT;

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
  switch (action.type) {
    case 'ENTER-MESSAGE-TEXT':
      return { ...state, newMessageText: action.text };
    case 'SEND-MESSAGE':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.dialogId]: [
            ...state.messages[action.dialogId],
            {
              id: '3',
              isMe: true,
              message: action.messageText,
              avatar: avatar,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export const sendMessageAC = (messageText: string, dialogId: string): SendMessageAT => {
  return { type: 'SEND-MESSAGE', messageText, dialogId };
};
export const enterMessageTextAC = (text: string): EnterMessageTextAT => {
  return { type: 'ENTER-MESSAGE-TEXT', text };
};
