import { TodoI } from "./useAction";
import { Action, ActionsTypes } from "./types";

export const reducer = (state: TodoI[] = [] , action: Action) => {
    switch(action.type){
        case ActionsTypes.fetchTodos: {
            return action.payload
        }
        case ActionsTypes.deleteTodos:{
            return state.filter((todo: TodoI) => todo.id !== action.payload)
        }
        default:
            return state
    }
}