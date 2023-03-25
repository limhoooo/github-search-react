import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/search-icon.png'
import { fetchRepositoryList } from '../../store/reducers/search-slice';
import classes from './Search.module.css'
import useInput from './../../hook/useInput';

const Search = () => {
    const dispatch = useDispatch();
    // 커스텀 훅으로 변경예정
    // https://kyounghwan01.github.io/blog/React/custome-hook/#%E1%84%8F%E1%85%A5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%B7-%E1%84%92%E1%85%AE%E1%86%A8
    const [text, setText] = useInput({
        email: "",
        password: ""
    });
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
        dispatch(fetchRepositoryList(search.trim()))
        setSearch('')
    }

    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <input type='text' className={`${classes['selectInput']} ${isValid && classes['valid']}`} placeholder='Search Your Github' value={search} onChange={onSearchValueHandler} />
                <button className={classes['selectButton']}>
                    <img src={searchIcon} alt="search icon" />
                </button>
                <input name="email" value={text.email} onChange={setText} />
                <input name="password" value={text.password} onChange={setText} />
            </form>
            {isValid && <p>정확한 검색어를 입력해주세요</p>}
        </div>
    );
};

export default Search;