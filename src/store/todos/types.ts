import { DeleteTodoActionI, FetchTodosActionI } from './../todos/useAction';

export enum ActionsTypes {
    fetchTodos,
    deleteTodos
}

export type Action = FetchTodosActionI | DeleteTodoActionI