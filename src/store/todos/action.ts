// import axios from 'axios'
// import { Dispatch } from 'redux'
// import { ActionsTypes as types } from './types'

// export interface TodoI {
//     id: number,
//     title: string,
//     completed: boolean
// }

// export interface FetchTodosActionI {
//     type: types.fetchTodos,
//     payload: TodoI[]
// }

// export interface DeleteTodoActionI {
//     type: types.deleteTodos,
//     payload: number
// }

// const url: string = "https://jsonplaceholder.typicode.com/todos"  

// export const fetchTodos = () => async (dispatch: Dispatch) => {
//     const res = await axios.get<TodoI[]>(url)

//     dispatch<FetchTodosActionI>({
//         type: types.fetchTodos,
//         payload: res.data
//     })
// }

// export const deleteTodo = (id: number) => (dispatch: Dispatch) => {
//     dispatch<DeleteTodoActionI>({
//         type: types.deleteTodos,
//         payload: id
//     })
// }

export const nothing = (): string => {
    return "use useAction.tsx"
}