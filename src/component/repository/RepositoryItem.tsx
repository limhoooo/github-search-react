import classes from './RepositoryItem.module.css';
import { fetchRepository } from '../../store/reducers/search-slice';
import { useAppDispatch, useAppSelector } from '../../hook/hooks';

const RepositoryItem = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const owner = useAppSelector(state => state.search.owner);
  const getRepositoryInfo = () => {
    dispatch(fetchRepository({ owner, repo: data.name }));
  };
  return (
    <div className={classes['Repository--Box']} onClick={getRepositoryInfo}>
      <p className={classes['name']}>{data.name}</p>
      <p className={classes['description']}>{data.description}</p>
      <div className={classes['bottomBox']}>
        <p className={classes['createdDate']}>{data.created_at}</p>
        <p className={classes['language']}>{data.language}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
