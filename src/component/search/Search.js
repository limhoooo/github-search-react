import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../../store/reducers/search-slice';
import classes from './Search.module.css'

const Search = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [isValid, setIsValid] = useState(false);
    const onSearchValueHandler = (e) => {
        setSearch(e.target.value)
    }
    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) {
            setIsValid(true);
            return
        }
        dispatch(fetchRepositories(search.trim()))
        setSearch('')
    }
    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <input type='text' className={`${classes['selectInput']} ${isValid && classes['valid']}`} placeholder='Search Your Github' value={search} onChange={onSearchValueHandler} />
                <button className={classes['selectButton']}>검색</button>
            </form>
            {isValid && <p>정확한 검색어를 입력해주세요</p>}
        </div>
    );
};

export default Search;