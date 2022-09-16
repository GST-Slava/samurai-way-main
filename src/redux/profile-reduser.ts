const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";


let initialState = {
    posts: [
        {id: 1, message: 'Uh no ', likesCount: 12},
        {id: 2, message: 'Hi ', likesCount: 10},
        {id: 3, message: 'Hello ', likesCount: 9},
        {id: 4, message: 'Hello World ', likesCount: 9}
    ],
    messageForNewPost: 'Hi people',
};

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            };
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const
}

