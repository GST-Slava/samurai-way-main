const SET_USER_DATA = 'SET_USER_DATA';

type AuthDataPropsType = {
    id: number
    email: string
    login: string
    isAuth: false
}
export type AuthPropsType = {
    resultCode: number
    messages: Array<string>
    data: AuthDataPropsType
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export type InitialStateType = typeof initialState;

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (initialState: InitialStateType) => ({type: SET_USER_DATA, data: {initialState}})