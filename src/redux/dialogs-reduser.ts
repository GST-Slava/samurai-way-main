const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Elon'},
        {id: 2, name: 'Frank'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Dean'},
        {id: 5, name: 'Jason'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Uh no'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Welcome'}
    ] as Array<MessagesType>,
    newMessageText: "",
};

export type InitialStateType = typeof initialState;


export const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };
        case ADD_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            };
        default:
            return state;
    }
}

export const updateNewMessageTextAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessageText: body
    } as const
}
export const sendMessageAC = () => ({type: "ADD_MESSAGE"})
