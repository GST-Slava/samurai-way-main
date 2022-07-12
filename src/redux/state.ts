export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
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
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export type  StoreType = {
    _state: RootStateType
    _onChange: () => void
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void

    subscribe: (callback: () => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}
export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Uh no ', likesCount: 12},
                {id: 2, message: 'Hi ', likesCount: 10},
                {id: 3, message: 'Hello ', likesCount: 9},
                {id: 4, message: 'Hello World ', likesCount: 9}
            ],
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
        this._onChange = callback;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._onChange();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange();
        }
    }

}