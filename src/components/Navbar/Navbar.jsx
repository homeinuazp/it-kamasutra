import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                {/* <a href="/profile">Profile</a> */}
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                {/* <a href="/dialogs">Messages</a> */}
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            {/* <div className={s.item}>
                <NavLink>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>Settings</NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar;