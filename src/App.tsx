import './App.css';

import { useSelector } from 'react-redux'
import { TodoI } from './store/counter/action';
import { StoreStateI } from './store/rootReducer';
import { useEffect } from 'react';
import { useAction , UseActionI } from './store/counter/useAction';

const App: React.FC = () => {
  const todos: TodoI[] = useSelector((state: StoreStateI) => state.todos)

  //usetodos action hook
  const { fetchTodos }: UseActionI = useAction()

  useEffect(()=>{
    fetchTodos()
  },[])

  return (
    <div className="App">
      <h2>Todos</h2>
      <section className="todos">
      {
        todos.map((todo , i) => (
          <section className="todo" key={i}>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'true' : 'false'}</p>
          </section>
        ))
      }
      </section>
    </div>
  );
}

export default App;
