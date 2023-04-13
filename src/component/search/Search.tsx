import React, { useState } from 'react';
import searchIcon from '../../assets/search-icon.png';
import { fetchRepositoryList } from '../../store/reducers/search-slice';
import classes from './Search.module.css';
import { useAppDispatch } from '../../hook/hooks';

const Search = () => {
  const dispatch = useAppDispatch();
  // 커스텀 훅으로 변경예정
  // https://kyounghwan01.github.io/blog/React/custome-hook/#%E1%84%8F%E1%85%A5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%B7-%E1%84%92%E1%85%AE%E1%86%A8

  const [search, setSearch] = useState('');
  const [isValid, setIsValid] = useState(false);
  const onSearchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      setIsValid(true);
      return;
    }
    dispatch(fetchRepositoryList(search.trim()));
    setSearch('');
  };
  const validText = isValid ? '정확한 검색어를 입력해주세요' : 'Search Your Github';
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          className={`${classes['selectInput']} ${isValid && classes['valid']}`}
          placeholder={validText}
          value={search}
          onChange={onSearchValueHandler}
        />
        <button className={classes['selectButton']}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
