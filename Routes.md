## App.js
```
import {Routes, Route, Link} from 'react-router-dom'
import AboutPage from './pages/About'

import ContentPage from './pages/Content';

import ContactPage from './pages/Contact'
function App() 
{
  return (
    <div className="App" style={{padding: 20,display: "flex", justifyContent: "center"}}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contents">Content</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AboutPage/>}></Route>
        <Route path="/contents" element={<ContentPage/>}></Route>
        <Route path="/contacts" element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

```

## Index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />,
    </BrowserRouter>

);
reportWebVitals();

```

## Structer

![image](https://user-images.githubusercontent.com/59383987/175840997-f2b32223-b2a3-4148-90eb-ee01f73f3a76.png)

## Switch
*Dành cho trường hợp performance, ko muốn load hết các route khác*
```
<Switch>
<Route path="/" component={Home}></Route>
<Route path="/path1" component={Path1}></Route>
<Route path="/path2" component={Path2}></Route>

<Switch>
```
