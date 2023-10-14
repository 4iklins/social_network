import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
import { PostType } from '../../../data/state';
import { AppDispatch } from '../../../redux/store';
import Post from './Post/Post';
import style from './posts.module.css';
import { createPostAC } from '../../../redux/profile-reducer';
import { ChangeEvent, useState } from 'react';

const Posts = ({ posts, dispatch }: { posts: PostType[]; dispatch: AppDispatch }) => {
  const [postText, setPostText] = useState<string>('');
  const onInputCange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostText(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(createPostAC(postText));
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
