export interface ProfilePageType {
  posts: PostType[];
  newPostText: string;
}
export interface PostType {
  id: number;
  text: string;
}

const initialState: ProfilePageType = {
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
};

export type CreatePostAT = {
  type: 'CREATE-POST';
  postText: string;
};
export type ActionsType = CreatePostAT;

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case 'CREATE-POST':
      debugger;
      return {
        ...state,
        posts: [{ id: 2, text: action.postText }, ...state.posts],
      };
    default:
      return state;
  }
};

export const createPostAC = (postText: string): CreatePostAT => {
  return { type: 'CREATE-POST', postText };
};
