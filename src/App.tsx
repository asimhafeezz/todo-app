import './App.css';

import { useSelector } from 'react-redux'
import { StoreStateI } from './store/rootReducer';
import { useEffect } from 'react';
import { useAction , UseActionI, TodoI } from './store/todos/useAction';

const App: React.FC = () => {
  const todos: TodoI[] = useSelector((state: StoreStateI) => state.todos)

  //usetodos action hook
  const { fetchTodos, deleteTodo }: UseActionI = useAction()

  useEffect(()=>{
    fetchTodos()
  },[])


  const onDeleteButtonHandler = (id: number): void => {
    deleteTodo(id)
  }

  return (
    <div className="App">
      <h2>Todos</h2>
      <section className="todos">
      {
        todos.map((todo , i) => (
          <section className="todo" key={i}>
            <div>
            <p><b>Title:</b> {todo.title}</p>
            <p><b>Completed:</b> {todo.completed ? 'true' : 'false'}</p>
            </div>
            <button onClick={() => onDeleteButtonHandler(todo.id)}>Delete</button>
          </section>
        ))
      }
      </section>
    </div>
  );
}

export default App;
