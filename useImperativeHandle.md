## useImperativeHandle
*IN VIDEO*
```
import { forwardRef, useImperativeHandle, useRef } from "react"
import media from "../media/beach.mp4"
function Video(props, ref)   
{
    const videoRef= useRef()
    useImperativeHandle(ref, ()=>({
        play()
        {
            videoRef.current.play()
        },
        pause()
        {
            videoRef.current.pause()
        }
    }))
 return(
    <Video
        ref={videoRef}
        src={media}
        width={280}
    />

 )
}
export default forwardRef(Video)
```

*IN APP*
```
import {useRef} from "react"
import Video from './Video/Video.js'
function App()
{
   const videoRef = useRef()
   const hanldePlay = () =>
   {
    videoRef.current.play()
   }
   const hanldeStop = () =>
   {
    videoRef.current.pause()
   }
  return (
    <div>
      <Video ref={videoRef}/>
      <button onClick={hanldePlay}>Play</button>
      <button onClick={hanldeStop}>Pause</button>
    </div>
  )
}
export default App;
```
