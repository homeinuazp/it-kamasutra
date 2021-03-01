import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
    
    let postsElements = props.posts
        .map( p => <Post message={p.message} like_cnt={p.likesCount}/>
    );
    
    let newPostElement = React.createRef();

    let addPost = () => { 
        //let text = newPostElement.current.value;
        props.dispath(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //console.log(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispath(action);
    }

    // console.log(props);

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/* <Post message={postsData[0].message} like_cnt={postsData[0].likesCount} />
                <Post message={postsData[1].message} like_cnt={postsData[1].likesCount}/> */}
            </div>
        </div>
    )
}

export default MyPosts;