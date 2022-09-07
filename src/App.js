import {useStore, action} from './store'
function App() 
{
  const [state, dispatch] = useStore()
  const { todo, todos} = state
  const handleAdd = () =>{
    dispatch(action.addTodo(todo))
  }
  return (
      <div>
        <input
          value={todo}
          placeholder="Enter todo..."
          onChange={(e)=>{
            dispatch(action.setTodoInput(e.target.value))
          }}
        />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todos.map((todo, index) =>(
            <li key={index}>{todo}</li>
          ))}  
        </ul>
      </div>
  );
}

export default App;