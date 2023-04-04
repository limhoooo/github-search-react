import classes from './RepositoryItem.module.css';
import { fetchRepository } from '../../store/reducers/search-slice';
import { useAppDispatch, useAppSelector } from '../../hook/hooks';
import { parseDateTime } from '../../util/parseDate';
import { searchType } from './../../type/searchType';

const RepositoryItem = ({ name, description, updated_at, created_at, language }: searchType) => {
  const dispatch = useAppDispatch();
  const owner = useAppSelector(state => state.search.owner);
  const getRepositoryInfo = () => {
    dispatch(fetchRepository({ owner, repo: name }));
  };

  return (
    <div className={classes['Repository--Box']} onClick={getRepositoryInfo}>
      <p className={classes['name']}>{name}</p>
      <p className={classes['description']}>{description}</p>
      <div className={classes['bottomBox']}>
        <div>
          <p className={classes['dateText']}>
            <span>Updated</span> : {parseDateTime(updated_at)}
          </p>
          <p className={classes['dateText']}>
            <span>Created</span> : {parseDateTime(created_at)}
          </p>
        </div>
        <p className={classes['language']}>{language}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
