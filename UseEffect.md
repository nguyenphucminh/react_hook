# UseEffect (use file Content.js)
## Posts

```
import {useState ,useEffect } from "react"
const tabs = ['posts', 'comments', 'albums']
function Content()
{
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToShop, setShowGoToShop] = useState(false)

    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts=> {setPosts(posts)})
        
    },[type])
    
    useEffect(()=>{
        const handleScrool =()=>
        {
            if(window.scrollY>=200)
            {
                setShowGoToShop(true)
            }
            else
            {
                setShowGoToShop(false)
            }
        }
        window.addEventListener('scroll', handleScrool)
        console.log('add')

        return () => 
        {
            window.removeEventListener('scroll', handleScrool)
            console.log('remove')
        }
    },[])

    return (
        <div>
            {tabs.map(tab =>
            (<button 
                key={tab} 
                style={type === tab ? {color:'#fff',backgroundColor:'#333'}:{}} 
                onClick={() => setType(tab)}>
                {tab}</button>))}

            <ul>
                {posts.map(post=>(<li key={post.id}>{post.title || post.name}</li>))}
            </ul>
            {showGoToShop && (<button style={{position:'fixed', right:20, bottom: 20}}>GotoTop</button>)}
        </div>

    )
}
export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175184575-b146104b-3199-4ba0-ad09-dfe0e860f8ae.png)


## Resize

```
import {useState ,useEffect } from "react"
function Content()
{
const [width, setWidth] = useState(window.innerWidth)
useEffect(()=>
{
    const handleResize = () =>
    {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () =>
    {
        window.removeEventListener('resize', handleResize)
    }
},[])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}
export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175186968-90dbacfe-3b25-4970-b01c-f2638e21b7f5.png)

## setInterval

```
import {useState ,useEffect } from "react"
function Content()
{
    const [countdown, setCountdown] = useState(1)
    useEffect(()=>
    {
        const intervalID = setInterval(()=>{
            setCountdown(prev => prev-1)
        },1000)
        return ()=> {clearInterval(intervalID)}
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default Content;

```
## Cleanup Increase

```
import {useState ,useEffect } from "react"
function Content()
{
    const [count, setCount] = useState(1)
    useEffect(()=>
    {   
        console.log(`render lan ${count}`)

        return ()=>
        {
            console.log(`cleanup lan ${count}`)
        }
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    )
}
export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175190300-c3443305-3a92-46b8-bda2-faafd6f0c046.png)

## setAvatar

```
import { useEffect, useState } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  useEffect(() => 
  {
    return () => 
    {
        avatar && URL.revokeObjectURL(avatar.preview);
    }
  }, [avatar]);

  const handlePreviewAvatar = (e) => 
  {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <>
      <div style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 8 }}> 
        <input type="file" onChange={handlePreviewAvatar} />

        {avatar && (
          <img
            style={{ marginTop: 8 }}
            src={avatar.preview}
            alt=""
            width="80%"
          />
        )}
      </div>
    </>
  );
}

export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175192860-b4615a78-da5c-4bf3-9457-c2071e335427.png)
