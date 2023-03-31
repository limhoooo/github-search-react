import React from 'react';
import Search from './Search';
import githubIcon from '../../assets/github-icon.png';
import classes from './SearchBackGround.module.css';

const SearchBox = () => {
  return (
    <section className={classes['search--contanier']}>
      <div>
        <div className={classes['search--summary']}>
          <div className={classes['search--text']}>
            <span>Search</span>
            <span>Your</span>
            <span>GitHub</span>
          </div>
          <img src={githubIcon} alt="github icon" />
        </div>
        <Search />
      </div>
    </section>
  );
};

export default SearchBox;
