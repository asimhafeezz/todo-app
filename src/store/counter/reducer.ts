import { FetchTodosActionI, TodoI } from "./action";
import { ActionsTypes } from "./types";

export const reducer = (state: TodoI[] = [] , action: FetchTodosActionI) => {
    switch(action.type){
        case ActionsTypes.fetchTodos: {
            return action.payload
        }
        default:
            return state
    }
}