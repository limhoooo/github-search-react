import classes from './RepositoryItem.module.css'

const RepositoryItem = ({ data }) => {
    return <div className={classes['Repository--Box']}>
        <p className={classes['name']}>{data.name}</p>
        <p className={classes['description']}>{data.description}</p>
        <div className={classes['bottomBox']}>
            <p className={classes['createdDate']}>{data.created_at}</p>
            <p className={classes['language']}>{data.language}</p>
        </div>
    </div>
};

export default RepositoryItem;