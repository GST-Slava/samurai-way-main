const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";

type PostsPropsType = Array<{
    id: number
    message: string
    likesCount: number
}>

export type ProfileStateType = {
    posts: PostsPropsType
    newPostText: string
    profile: null
}

let initialState = {
    posts: [
        {id: 1, message: 'Uh no ', likesCount: 12},
        {id: 2, message: 'Hi ', likesCount: 10},
        {id: 3, message: 'Hello ', likesCount: 9},
        {id: 4, message: 'Hello World ', likesCount: 9}
    ],
    newPostText: 'Hi people',
    profile: null
};

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
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

export const setUserProfile = (profile: string) => {
    return {
        type: "SET_USER_PROFILE",
        profile: null
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const
}

