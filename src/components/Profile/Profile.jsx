import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    //console.log('props:' & props);
    return (
        <div>
            
            <ProfileInfo />
            <MyPosts 
                posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText}
                dispath={props.dispath}
            />
        </div>
    )
}

export default Profile;