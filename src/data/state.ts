import bakinovski from '../assets/img/usersAvatars/bakinovski.jpg';
import kiedis from '../assets/img/usersAvatars/kiedis.webp';
import flea from '../assets/img/usersAvatars/flea.jpg';
import avatar from '../assets/img/usersAvatars/avatar.jpg';

export interface IState {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
}

export interface ProfilePageType {
  posts: PostType[];
  newPostText: string;
}
export interface PostType {
  id: number;
  text: string;
}

export interface MessagesPageType {
  users: UserType[];
  messages: MessagesType;
  newMessageText: string;
}
export interface MessagesType {
  [key: string]: MessageType[];
}

export interface UserType {
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

export const state: IState = {
  profilePage: {
    posts: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?',
      },
      {
        id: 0,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
      },
    ],
    newPostText: '',
  },

  messagesPage: {
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
  },
};
