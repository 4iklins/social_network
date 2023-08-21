import Icon from '../../../../components/Icon/Icon';
import style from './post.module.css';

type PostPropsType = {
  text: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={style.post}>
      <div className={style.photoWrapper}>
        <Icon id='user' color='#181818' viewBox='0 0 200 200' width='24' heigth='24' />
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
