import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Wrapper from '../../components/Wrapper/Wrapper';
import { UserType } from '../../redux/users-reducer';
import User from './User/User';
import { UsersPropsType } from './UsersContainer';
import style from './users.module.css';

const usersAr: UserType[] = [
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'ststs',
    id: 30457,
    uniqueUrlName: null,
    photos: {
      small: 'https://social-network.samuraijs.com/activecontent/images/users/30463/user-small.jpg?v=1',
      large: 'https://social-network.samuraijs.com/activecontent/images/users/30463/user.jpg?v=1',
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
  {
    name: 'JuliaNezhel',
    id: 30458,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
    followed: false,
  },
];

const Users = ({ users, setUsers }: UsersPropsType) => {
  if (users.length === 0) {
    setUsers(usersAr);
  }
  return (
    <div className={style.users}>
      <div className={style.searchBox}>
        <Wrapper className={style.wrapper}>
          <InputField type='text' className={style.searchUser} />
          <Button>Search</Button>
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
