import { combineReducers } from 'redux'
import { TodoI } from './counter/action'
import { reducer as todoReducer } from './counter/reducer'

export interface StoreStateI {
    todos: TodoI[]
}

export const rootReducer = combineReducers<StoreStateI>({
    todos: todoReducer
})