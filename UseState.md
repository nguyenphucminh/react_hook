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
