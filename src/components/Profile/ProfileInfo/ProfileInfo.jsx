import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://geekhero.ru/wp-content/uploads/2015/12/dipper_by_derpybubbles-d59f2gz.jpg' alt="images" />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;