# UseState
## Counter

```
import { useState } from "react";
const orders = [100,200,300]
function App() 
{
  const [counter, setCounter] = useState(()=>
  {
    const total = orders.reduce((total,x)=>total+x);
    return total;
  })
  const handleClick = () => 
  {
    setCounter(counter+1)
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175051672-31b66236-f8d3-40a0-9656-eb7c36155d3c.png)

## Info

```
import { useState } from "react";
function App() 
{
  const [info, setInfo] = useState(
  {
    name: 'Nguyen Phuc Minh',
    age: 18,
    address: 'An Giang'
  })
  const handleClick = () => 
  {
    setInfo(prev =>({...prev, bio:'love web'}))
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175055364-8f41d4d5-4105-41bc-8819-b88124a99325.png)

## Gift

```
import { useState } from "react";
function App() 
{
  const [info, setInfo] = useState(
  {
    name: 'Nguyen Phuc Minh',
    age: 18,
    address: 'An Giang'
  })
  const handleClick = () => 
  {
    setInfo(prev =>({...prev, bio:'love web'}))
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175055077-fb119067-1e41-4d09-b44a-39edc610797d.png)

## One Way Binding

```
import { useState } from "react";
function App() 
{
  const [name, setName] = useState()
  console.log(name);
  return (
    <div className="App" style={{padding: 20}}>
      <input
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName('Nguyen Van BBB')}>click</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175056964-e1d341eb-ba3a-494c-b78a-06ca25f1315e.png)

## Two Way Binding

```
import { useState } from "react";
function App() 
{
  const [name, setName] = useState()
  console.log(name);
  return (
    <div className="App" style={{padding: 20}}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName('Nguyen Van BBB')}>click</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175057269-c22a8444-4250-40c4-9bbe-c1783198f474.png)

## CheckBox

```
import { useState } from "react";
const courses =
[
  {
    id: 1,
    name: 'Math'
  },
  {
    id: 2,
    name: 'Art'
  }
  ,
  {
    id: 3,
    name: 'Biology'
  }
]
function App() 
{
  const [checked, setChecked] = useState([])
  const handleCheck=(id)=>
  {
    setChecked(prev => 
    {
      const isChecked = checked.includes(id)
      if(isChecked)
      {
        return checked.filter(item => item !== id)
      }
      else
      {
        return [...prev, id]
      }
    })
  }
  const handleSubmit = () =>
  {
    console.log({id: checked})
  }
  return (
    <div className="App" style={{padding: 20}}>
      {courses.map(course =>
      (
        <div key={course.id}>
          <input
          type="checkbox"
          checked={checked.includes(course.id)}
          onChange={() => handleCheck(course.id)}
          />{course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

```
![image](https://user-images.githubusercontent.com/59383987/175081386-9d3b3bb7-ea3e-420f-a1c8-44425cf5d928.png)

## Todo List

```
import { useState } from "react";
function App() 
{
  const [job, setJob] = useState('')
  const [jobs, setJobs] =useState(() =>
  {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs;
  })

  const handleSubmit = () =>
  {
    setJobs(prev=>
    {
      const newJobs = [...prev, job]
      
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
  }
  return (
    <div className="App" style={{padding: 20}}>
      <input
      value={job}
      onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
      {jobs.map((job,index)=>(
        <li key={index}>{job}</li>
      ))}
      </ul>

    </div>
  );
}

export default App;

```

![image](https://user-images.githubusercontent.com/59383987/175086994-b1c714c8-7490-47cf-b2ee-40d99fab93f6.png)
