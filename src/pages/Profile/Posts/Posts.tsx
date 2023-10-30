import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
import { PostType } from '../../../data/state';
import Post from './Post/Post';
import style from './posts.module.css';
import { ChangeEvent, useState } from 'react';

type PostPropsType = {
  posts: PostType[];
  createPost: (postText: string) => void;
};

const Posts = ({ posts, createPost }: PostPropsType) => {
  const [postText, setPostText] = useState<string>('');
  const onInputCange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostText(e.currentTarget.value);
  };
  const onClickHandler = () => {
    createPost(postText);
    setPostText('');
  };

  return (
    <div className={style.posts}>
      <div className={style.createPost}>
        <InputField type='text' placeholder='Type something...' value={postText} onChange={onInputCange} />
        <Button onClick={onClickHandler}>Send</Button>
      </div>
      <div className={style.postsWrapper}>
        {posts.map(post => (
          <Post key={post.id} text={post.text} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
