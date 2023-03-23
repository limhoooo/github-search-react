import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../../store/reducers/search-slice';

const Search = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.search.resData);

    const [search, setSearch] = useState('');
    const onSearchValueHandler = (e) => {
        setSearch(e.target.value)
    }
    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchRepositories(search.trim()))
        setSearch('')
    }
    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <input type='text' placeholder='검색어를 입력해주세요' value={search} onChange={onSearchValueHandler} />
                <button>검색</button>
            </form>
            <div>
                {items.length === 0 ? <p>사용자 정보가 없습니다 </p> : items.map(item => <p>{item.name}</p>)}
            </div>
        </div>
    );
};

export default Search;