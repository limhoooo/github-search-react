import classes from './RepositoryItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepository } from './../../store/reducers/search-slice';

const RepositoryItem = ({ data }) => {
    const dispatch = useDispatch();
    const owner = useSelector(state => state.search.owner)
    const getRepositoryInfo = () => {
        dispatch(fetchRepository({ owner, repo: data.name }));
    }
    return <div className={classes['Repository--Box']} onClick={getRepositoryInfo}>
        <p className={classes['name']}>{data.name}</p>
        <p className={classes['description']}>{data.description}</p>
        <div className={classes['bottomBox']}>
            <p className={classes['createdDate']}>{data.created_at}</p>
            <p className={classes['language']}>{data.language}</p>
        </div>
    </div>
};

export default RepositoryItem;