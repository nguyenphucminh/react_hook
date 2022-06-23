# useRef
## start stop with count
```
import {useState ,useRef, useEffect } from "react"
function Content()
{
    const [countdown, setCountdown] = useState(60)
    let timerID = useRef()
    const prevCount = useRef()
    useEffect(()=>
    {
        prevCount.current = countdown
    },[countdown])
    const handleStart = () => 
    { 
        //setInterval chạy sẽ lưu id của timer vào timerID.curent 
        timerID.current = setInterval(()=>
        {
            setCountdown(prev => prev - 1)
        },1000)
        console.log('Start -> ', timerID.current);
    }
    const handleStop = () =>
    {
        //dựa vào id của timer trước đó mà clear 
        clearInterval(timerID.current)
        console.log('Stop -> ', timerID.current);
    }

    console.log(countdown, prevCount.current);
    return (
        <div>
            <h1>{countdown}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Content;

```
![image](https://user-images.githubusercontent.com/59383987/175207707-a376bfd6-a29f-4ce9-af01-32d4718f7f38.png)

## get element and coordinate with useRef
```
import {useState ,useRef, useEffect } from "react"
function Content()
{
    const [getElem, setgetElem] = useState('minh')
    const h1Ref = useRef()

    useEffect(()=>
    {
        console.log(h1Ref.current)
    })
    useEffect(()=>
    {
        const coor = h1Ref.current.getBoundingClientRect()
        console.log(coor)
    })
    const handleClick = () =>
    {
        setgetElem('nam')
    }
    return (
        <div>
            <h1 ref={h1Ref}>{getElem}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
}
export default Content;


```
![image](https://user-images.githubusercontent.com/59383987/175208825-39d64b16-b350-436a-9115-34803fe9b8c1.png)
