###### useCallback được sử dụng để tối ưu quá trình render của React functional components. Nó sẽ rất hữu ích đối với trường hợp một thành phần (component) liên tục được hiển thị lại không cần thiết trong quá trình xử lý sự kiện người dùng và có hành vi chức năng phức tạp. Chúng ta sẽ xem xét thông qua ví dụ đơn giản về cách triển khai hook này để xem cách nó có thể giúp chúng ta đạt hiệu quả thế nào trong quá trình xử lý re-rendering của component.
###### useCallback đòi hỏi phải đi với memo để có thể phát huy tác dụng, memo chính là HOC của child component/ được sử dụng để ngăn chặn việc re-render DOM của component cha thông qua tham số dependencies của useCallback.

## App.js
```
import React, { useState, useCallback } from 'react'
import HandleComp from './handleComp.jsx'
function App() {
    const [increase, setIncrease] = useState(0)
	  const handleClick = useCallback((e)=>{
        e.preventDefault();
        setIncrease((prev)=> prev+1);
    }, [])
	return (
			<>
				<div>Count: {increase}</div>
         <HandleComp onIncrease={handleClick}/>
			</>
	)
}

export default App;
```
## HandleComp.js

```
import {memo} from 'react';
function HandleComp({onIncrease}){ 
    console.log("re-render")
    return (
        <button onClick={onIncrease}>Click</button>
    )
}
export default memo(HandleComp)
```


#### link test
```
https://codedamn.com/playground/TmBp6jjRqJ0wK_E3du_je
```
