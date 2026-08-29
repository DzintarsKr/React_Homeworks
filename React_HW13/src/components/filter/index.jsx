import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import styles from './styles.module.css';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Поиск пользователей..."
        value={filter}
        onChange={handleChange}
        className={styles.filterInput}
      />
    </div>
  );
};

// Передаем значение фильтра из стора в пропсы компонента
const mapStateToProps = (state) => ({
  filter: state.filter,
});

// Передаем функцию изменения фильтра в пропсы компонента
const mapDispatchToProps = {
  setFilter,
};

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default ConnectedFilter;
