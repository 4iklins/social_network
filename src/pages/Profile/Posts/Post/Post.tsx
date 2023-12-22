import UserPhoto from '../../../../components/UserPhoto/UserPhoto';
import style from './post.module.css';

type PostPropsType = {
  text: string;
  userPhoto: string | null;
  userName: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={style.post}>
      <UserPhoto avatar={props.userPhoto} size='small' />
      <div className={style.textBlock}>
        <div className={style.name}>{props.userName}</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Post;
