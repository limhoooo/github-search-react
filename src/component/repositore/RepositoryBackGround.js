import React from 'react';
import classes from './RepositoryBackGround.module.css'
import RepositoryItem from '../Repository/RepositoryItem';
import { useSelector } from 'react-redux';

const RepositoryBackGround = () => {
    const items = useSelector((state) => state.search.resData);

    return (
        <div className={classes['Repository--contanier']}>
            {items.length === 0 ? <p>사용자 정보가 없습니다 </p> :
                items.map(item => <RepositoryItem key={item.id} data={item} />)}
        </div>
    );
};

export default RepositoryBackGround;