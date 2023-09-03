import Button from '../../../components/Button/Button';
import InputField from '../../../components/InputField/InputField';
import { PostType } from '../../../data/state';
import Post from './Post/Post';
import style from './posts.module.css';

const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className={style.posts}>
      <div className={style.createPost}>
        <InputField type='text' placeholder='Type something...' />
        <Button>Send</Button>
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
