import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Wrapper from '../../components/Wrapper/Wrapper';
import User from './User/User';
import { UsersPropsType } from './UsersContainer';
import style from './users.module.css';
import Pagination from '../../components/Pagination/Pagination';
import { ChangeEvent } from 'react';

const Users = (props: UsersPropsType) => {
  const {
    users,
    currentPage,
    totalCount,
    itemsPerPage,
    searchUser,
    getUsers,
    setCurrentPage,
    setUsersPerPage,
    setSearchUser,
    setFollowingInProgress,
    followToggle,
  } = props;

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.currentTarget.value);
  };
  const onSearchButtonClick = () => {
    getUsers(`?page=${1}&count=${itemsPerPage}&term=${searchUser}`).then(() => {
      setCurrentPage(1);
    });
  };

  return (
    <div className={style.users}>
      <div className={style.searchBox}>
        <Wrapper className={style.wrapper}>
          <InputField value={searchUser} type='text' className={style.searchUser} onChange={changeInputHandler} />
          <Button size='large' color='secondary' onClick={onSearchButtonClick}>
            Search
          </Button>
        </Wrapper>
      </div>

      <ul className={style.usersList}>
        {users.map(user => (
          <User {...user} key={user.id} followToggle={followToggle} setFollowingInProgress={setFollowingInProgress} />
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
