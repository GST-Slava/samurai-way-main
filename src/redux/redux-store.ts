import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {dialogsReducer} from "./dialogs-reduser";
import {sidebarReducer} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


