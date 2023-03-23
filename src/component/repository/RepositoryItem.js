import React from 'react';
import classes from './RepositoryItem.module.css'

const RepositoryItem = ({ data }) => {
    return <div className={classes['Repository--Box']}>
        <p >{data.name}</p>
        <p>{data.description}</p>
        <p>{data.language}</p>
        <p>{data.created_at}</p>
    </div>
};

export default RepositoryItem;