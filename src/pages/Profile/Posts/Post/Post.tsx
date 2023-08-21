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
      <div className={style.textBlock}>
        <div className={style.name}>Andrei</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
