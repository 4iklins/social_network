type PostPropsType = {
  text: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
