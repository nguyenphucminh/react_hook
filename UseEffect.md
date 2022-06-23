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
