## useReducer
```
import {useReducer } from "react";
const initState = 0
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const RESET_ACTION = "reset";
const reducer = (state, action) =>{
  switch(action){
    case UP_ACTION: return state + 1
    case DOWN_ACTION: return state - 1
    case RESET_ACTION: return 0
    default: throw new Error("Invalid action");
  }
}
function App() 
{
  const [count, dispatch] = useReducer(reducer, initState);
    return (
      <div style={{padding: 20}}>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(DOWN_ACTION)}>DOWN</button>
        <button onClick={()=> dispatch(UP_ACTION)}>UP</button>
        <button onClick={()=> dispatch(RESET_ACTION)}>RESET</button>
      </div>
  );
}

export default App;

```
