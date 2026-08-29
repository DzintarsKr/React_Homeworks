import { connect } from 'react-redux';
import UserItem from '../userItem';
import styles from './styles.module.css';

const UserList = ({ users, filter }) => {
  // Фильтруем пользователей: имя должно содержать строку из фильтра (без учета регистра)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.userList}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      ) : (
        <p className={styles.noUsers}>Пользователи не найдены</p>
      )}
    </ul>
  );
};

// Забираем из стора список пользователей и текущий фильтр
const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

const ConnectedUserList = connect(mapStateToProps)(UserList);
export default ConnectedUserList;