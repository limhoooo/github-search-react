import React from 'react';
import classes from './RepositoryBackGround.module.css';
import RepositoryItem from './RepositoryItem';
import { useAppSelector } from '../../hook/hooks';

const RepositoryBackGround = () => {
  const items = useAppSelector(state => state.search.resData);

  return (
    <div className={classes['Repository--contanier']}>
      {items.length === 0 ? (
        <p>사용자 정보가 없습니다 </p>
      ) : (
        items.map(item => (
          <RepositoryItem
            key={item.id}
            name={item.name}
            description={item.description}
            updated_at={item.updated_at}
            created_at={item.created_at}
            language={item.language}
          />
        ))
      )}
    </div>
  );
};

export default RepositoryBackGround;
