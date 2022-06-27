## index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ThemeProvider>
                 <App />
        </ThemeProvider> 
       

);
reportWebVitals();

```
## App.js
```
import Content from "./Content";
import './App.css'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function App() 
{
  const context = useContext(ThemeContext)
  return (
      <div style={{padding: 20}}>
        <button onClick={context.toggleTheme}>theme</button>
        <Content/>
      </div>
  );
}

export default App;
```
## ThemeContext.js
```
import { useState, createContext } from "react"; 
import './App.css'

const ThemeContext = createContext()
function ThemeProvider({children}) 
{
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const value = {
    theme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  );
}   

export {ThemeContext, ThemeProvider};

```
## Content.js
```
import {useContext } from "react"
import {ThemeContext} from './ThemeContext'
function Content()
{   const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>This is Text</p>
    )
    
}
export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175847278-0e799728-fc15-4804-a428-a0878928f1fe.png)

