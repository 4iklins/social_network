import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
import Post from './Post/Post';
import style from './posts.module.css';

const Posts = () => {
  return (
    <div className={style.posts}>
      <div className={style.createPost}>
        <InputField type='text' placeholder='Type something...' />
        <Button>Send</Button>
      </div>
      <div className={style.postsWrapper}>
        <Post text='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
        <Post text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit' />
      </div>
    </div>
  );
};

export default Posts;
