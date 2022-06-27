# MountAndUnMounted
## File App.js

```
import { useState } from "react";
import Content from "./Content"
function App() 
{

  const [show, setShow] = useState(false)
  return (
    <div className="App" style={{padding: 20}}>
      <button onClick={(e) => setShow(!show)}>show</button>
      {show && <Content/>}
    </div>
  );
}

export default App;

```
## File Content.js
```
function Content()
{
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default Content

```
