import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://material-ui.com/static/sponsors/doit-intl.png' alt="images"></img>
            Логотип
        </header>
    )
}

export default Header;