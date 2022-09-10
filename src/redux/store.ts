import {addPostAC, changeNewTextAC, profileReducer} from "./profile-reduser";
import {sendMessageAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reduser";
import {sidebarReducer} from "./sidebar-reduser";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type UsersLocationType = {
    city: string
    country: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>


export type  StoreType = {
    _state: RootStateType
    _onChange: () => void
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    subscribe: (callback: (getState: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Uh no ', likesCount: 12},
                {id: 2, message: 'Hi ', likesCount: 10},
                {id: 3, message: 'Hello ', likesCount: 9},
                {id: 4, message: 'Hello World ', likesCount: 9}
            ],
            messageForNewPost: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Elon'},
                {id: 2, name: 'Frank'},
                {id: 3, name: 'Sam'},
                {id: 4, name: 'Dean'},
                {id: 5, name: 'Jason'}
            ],
            messages: [
                {id: 1, message: 'Uh no'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'Welcome'}
            ],
            newMessageText: "",
        },
        sidebar: {}
    },
    _onChange() {
        console.log('state changed')
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    subscribe(callback) {

    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);


    }
}