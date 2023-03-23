import React from 'react';
import Search from './Search';
import classes from './SearchBackGround.module.css'
const SearchBox = () => {
    return (
        <section className={classes['search--contanier']}>
            <div>
                <Search />
            </div>
        </section>
    );
};

export default SearchBox;