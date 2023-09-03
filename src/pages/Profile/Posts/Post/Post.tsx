import UserPhoto from '../../../../components/UserPhoto/UserPhoto';
import style from './post.module.css';

type PostPropsType = {
  text: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={style.post}>
      <UserPhoto avatar='' />
      <div className={style.textBlock}>
        <div className={style.name}>Andrei</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
