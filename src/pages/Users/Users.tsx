import { UserType } from '../../redux/users-reducer';
import { UsersPropsType } from './UsersContainer';

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
    <div>
      {users.map(u => (
        <div>{u.name}</div>
      ))}
    </div>
  );
};

export default Users;
