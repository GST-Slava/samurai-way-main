import {UsersLocationType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}

export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: [],
};


export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW, userId
})
export const unfollowAC = (userId: number) => ({
    type: UNFOLLOW, userId
})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
