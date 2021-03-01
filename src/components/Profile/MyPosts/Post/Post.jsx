import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    // debugger;
    return (
        <div className={s.item}>
            <img src='https://c3.klipartz.com/pngpicture/78/461/sticker-png-relax-dipper-thumbnail.png' alt="images"/>
            {props.message}
            <div>
                <span>{props.like_cnt} лайков</span>
            </div>
        </div>
    )
}

export default Post;