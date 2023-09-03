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
  newMessageText: string;
}

export interface UserType {
  id: number;
  name: string;
  avatar: string;
  messages?: MessageType[];
}

export interface MessageType {
  isMe: boolean;
  message: string;
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
        id: 0,
        name: 'Andrei Bakinovskiy',
        avatar:
          'https://sun9-73.userapi.com/impg/NSpxZb1J_V-M_YJNBMaJhCVThrQniOiL73eGNQ/9cFQ4T1g3OA.jpg?size=810x1080&quality=95&sign=faeaf2da7a2da7c581b509f3b2eaacd2&type=album',
        messages: [
          {
            isMe: false,
            message:
              'Bor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
          },
          {
            isMe: true,
            message:
              'Backinofsky!Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
          },
        ],
      },
      {
        id: 1,
        name: 'Anthony Kiedis',
        avatar: 'https://avatars.mds.yandex.net/i?id=dbe15ebdff2bdb03960c008e55c2b271-4034399-images-thumbs&n=13',
        messages: [
          {
            isMe: false,
            message: 'Yo man!',
          },
          {
            isMe: true,
            message: 'Otherside ',
          },
        ],
      },
      {
        id: 2,
        name: 'Chad Smith',
        avatar: 'https://kennyaronoff.com/wp-content/uploads/2016/08/Chad-Smith.jpg',
        messages: [],
      },
      {
        id: 3,
        name: 'Flea',
        avatar: 'https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/8/f/9/e/fd7c-7e05-4d36-b23f-025885fd60e1.jpg',
        messages: [
          {
            isMe: false,
            message: 'Yo man!',
          },
          {
            isMe: true,
            message: 'Yo Flea!',
          },
        ],
      },
      {
        id: 4,
        name: 'John Frusciante',
        avatar: 'https://avatars.mds.yandex.net/i?id=02f58dbcd6821115f096fcc625d22156-4577390-images-thumbs&n=13',
        messages: [],
      },
      {
        id: 5,
        name: 'Neil Degrasse Tyson',
        avatar: '',
        messages: [],
      },
    ],
    newMessageText: '',
  },
};
