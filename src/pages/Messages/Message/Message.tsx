import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import style from './message.module.css';

const Message = () => {
  return (
    <li className={style.message}>
      <div className={style.wrapper}>
        <UserPhoto />
        <div className={style.name}>Andrei</div>
      </div>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, libero, aspernatur dolorum iusto dicta assumenda
        quidem facilis blanditiis perferendis eaque, atque eum nesciunt. Hic, voluptas doloribus vitae animi iusto
        obcaecati reprehenderit amet nam totam, voluptate nostrum vel quis laboriosam enim quia accusamus expedita
        assumenda eum eveniet aliquid. Quaerat, quod alias.
      </p>
    </li>
  );
};

export default Message;
