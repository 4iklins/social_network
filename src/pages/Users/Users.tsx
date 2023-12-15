import axios from 'axios';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Wrapper from '../../components/Wrapper/Wrapper';
import { UserType } from '../../redux/users-reducer';
import User from './User/User';
import { UsersPropsType } from './UsersContainer';
import style from './users.module.css';

type UsersResponseType = {
  error: string | null;
  items: UserType[];
  totalCount: number;
};
const Users = ({ users, setUsers }: UsersPropsType) => {
  if (users.length === 0) {
    axios
      .get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => setUsers(res.data.items));
  }

  return (
    <div className={style.users}>
      <div className={style.searchBox}>
        <Wrapper className={style.wrapper}>
          <InputField type='text' className={style.searchUser} />
          <Button size='large' color='secondary'>
            Search
          </Button>
        </Wrapper>
      </div>

      <ul className={style.usersList}>
        {users.map(user => (
          <User {...user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
