import React from 'react';
import classes from './Footer.module.css'

const footer = () => {
    return (
        <footer className={classes['footer']}>
            <a href='https://github.com/limhoooo' target='_blank' rel="noreferrer">
                https://github.com/limhoooo
            </a>
            {/* <span>
                Email : dlagh123@gmail.com
            </span> */}
        </footer>
    );
};

export default footer;