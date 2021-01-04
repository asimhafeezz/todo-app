import { combineReducers } from 'redux'
import { TodoI } from './todos/useAction'
import { reducer as todoReducer } from './todos/reducer'

export interface StoreStateI {
    todos: TodoI[]
}

export const rootReducer = combineReducers<StoreStateI>({
    todos: todoReducer
})