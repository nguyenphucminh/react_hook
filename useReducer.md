## useReducer
*useReducer sử dụng giống useState nhưng nó đơn giản hóa cho nhiều trường hợp,nhiều cấp hoặc nhiều state hơn thay vì useState* 
*initState truyền vào state, state truyền ngược lại cho reducer.*
*dispatch là 1 function chứa 1 callback. trong callback nhận 1 param là job, chính là payload (setJob(job)) *
*dispatch được xem như là setState, nên mọi thứ thay đổi đều dựa vào dispatch*

*reducer mặc định chứa 2 tham số (state, action), trong action chứa TYPE và PAYLOAD được dispatch giải vào reducer để giải quyết
sau khi giải quyết xong trong reducer, nó sẽ trả về cái state mới và update vào state cũ. *
*
### Guide

1. Init state
2. Action
3. Reducer
4. Dispatch
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
![image](https://user-images.githubusercontent.com/59383987/176338360-edaecd46-813d-4e62-9c6c-6ef5f8c71841.png)

## TODO APP
```
import {useReducer, useRef} from 'react'
//1.Init state
const initState = {job:'', jobs: []}
//2.Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
//payload là dữ liệu mang theo đi, nên user gõ vào input là payload sẽ mang theo
const setJob = payload =>{
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload =>{
  return {
    type: ADD_JOB,
    payload
  } 
}
const deleteJob = payload =>{
  return {
    type: DELETE_JOB,
    payload
  }
}
//3.Reducer
const reducer = (state, action)=>{
  let newState
  switch(action.type)
  {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs:[...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invallid action')
  }
  return newState
}
function App() {
  const [state, dispatch] =  useReducer(reducer, initState);
  const {job, jobs} = state
  const inputRef = useRef()
  const handleSubmit = () =>{
    dispatch(addJob(job))
    dispatch(setJob(''))  
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <h3>To Do App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter Todo'
        onChange={e =>{
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index)=>(
          <li key={index}>{job}{'    '}   
            <button onClick={()=>dispatch(deleteJob(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/179338648-035e18a1-1262-4845-99b3-41922a36c588.png)

 
