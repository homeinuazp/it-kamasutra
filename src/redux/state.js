const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, Dima',           likesCount: 12},
                {id: 2, message: 'It s my first post', likesCount: 10},
                {id: 3, message: 'It s my first', likesCount: 14},
                {id: 4, message: 'It s my', likesCount: 1},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Anya'},
                {id: 5, name: 'Klim'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your work?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hey'},
                {id: 5, message: 'Up'},
            ]
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } 
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export const addPostActionCreator = () => ({    
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

window.store = store;

export default store;

// let rerenderEntireTree = () => {
//     console.log('state changed');
// }

// let state = {

//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, Dima',           likesCount: 12},
//             {id: 2, message: 'It s my first post', likesCount: 10},
//             {id: 3, message: 'It s my first', likesCount: 14},
//             {id: 4, message: 'It s my', likesCount: 1},
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Anton'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Anya'},
//             {id: 5, name: 'Klim'},
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your work?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Hey'},
//             {id: 5, message: 'Up'},
//         ]
//     },
//     sidebar: {}
// }

// window.state = state;

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

