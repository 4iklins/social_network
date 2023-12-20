import axios from 'axios';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Wrapper from '../../components/Wrapper/Wrapper';
import { UserType } from '../../redux/users-reducer';
import User from './User/User';
import { UsersPropsType } from './UsersContainer';
import style from './users.module.css';
import Pagination from '../../components/Pagination/Pagination';


const Users = (props: UsersPropsType) => {
  const { users, currentPage, totalCount, itemsPerPage, setUsers, setTotalCount, setCurrentPage, setUsersPerPage } =
    props;

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
          <User {...user} key={user.id} />
        ))}
      </ul>
      <Pagination
        total={totalCount}
        current={currentPage}
        itemsCount={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setUsersPerPage}
      />
    </div>
  );
};

export default Users;
