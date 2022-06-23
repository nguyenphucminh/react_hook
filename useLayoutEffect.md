# useLayoutEffect()
## Set count == 0  if count > 3

```
import { useLayoutEffect, useState } from "react";

function Content() {
  const [count, setCount] = useState(0)
  useLayoutEffect(()=>
  {
    if(count > 3)
    {
        setCount(0)
    }
  },[count])
  const handleIncrese = () =>
  {
    setCount(prev => prev +1 )
  }
  return (
      <div style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 8 }}> 
        <h1>{count}</h1>
        <button onClick={handleIncrese}>click</button>
      </div>
  );
}

export default Content;

```
