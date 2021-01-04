import { useDispatch } from "react-redux"
import axios from 'axios'
import { ActionsTypes as types } from './types'

const url: string = "https://jsonplaceholder.typicode.com/todos"  

export interface TodoI {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosActionI {
    type: types.fetchTodos,
    payload: TodoI[]
}

export interface DeleteTodoActionI {
    type: types.deleteTodos,
    payload: number
}

export interface UseActionI {
    fetchTodos: () => Promise<void>,
    deleteTodo: (id: number) => void
}



export const useAction = (): UseActionI => {
    const dispatch = useDispatch()

    const fetchTodos = async (): Promise<void> => {
    const res = await axios.get<TodoI[]>(url)

    console.log({res})

    dispatch<FetchTodosActionI>({
        type: types.fetchTodos,
        payload: res.data
    })
    }

    const deleteTodo = (id: number): void => {
        dispatch<DeleteTodoActionI>({
            type: types.deleteTodos,
            payload: id
        })
    }

    return {
        fetchTodos,
        deleteTodo
    }
}