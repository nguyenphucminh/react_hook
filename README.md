<table>
  <tr>
    <th>Use Effect</th>
    <th>Use layoutEffect</th>
  </tr>
  <tr>
    <td>1. Events happen</td>
    <td>1. Events happen</td>
  </tr>
  <tr>
    <td>2. Render component</td>
    <td>2. Render component</td>
  </tr>
  <tr>
    <td>3. UI is updated</td>
    <td>3. useLayoutEffect</td>
  </tr>
  <tr>
    <td>4. useEffect</td>
    <td>4. UI is updated.</td>
  </tr>
</table>

###### useEffect sẽ được chạy sau khi render component. Khi ta click vào button để thay đổi giá trị thì component sẽ render lại, trả về UI, sau đó mới chạy useEffect, trong useEffect ta lại thay đổi giá trị của state nên react sẽ render lại lần nữa để vẽ lại UI.
```
useEffect: Sẽ là lựa chọn cho giúp việc tối ưu tốc độ chạy khỏi phải chờ đợi gì thường được dùng để fetching data.
```
###### Nếu bạn thấy hiện tượng giật, sử dụng để đo vị trí trong DOM (đo vị trí của element,...) hãy thử dùng useLayoutEffect. Nó cũng giống useEffect nhưng khác cách chạy. Khi ta click vào button để thay đổi giá trị thì component sẽ render lại, sau đó mới chạy vào useLayoutEffect và cuối cùng cập nhật lại UI.
```
useLayoutEffect: Nhưng nếu bạn muốn xử lý đồng bộ với UI thì hãy dùng useLayoutEffect
```

#### Usecallback
1. Thay vì return 1 value như useMemo, useCallBack return 1 function.
 
2. useCallback được dùng để chống sự re-render lại khi không cần thiêt của các thành phần con khi các sự phụ phụ thuộc có liên quan thay đổi (ví dự giống như shouldComponentUpdate) ( dùng để memorize handler, trả về 1 function, thường đề truyền xuống các child component (pure) để nó không render lại khi không cần thiết )

useMemo giữ cho một hàm không được thực thi lại nếu nó không nhận được một tập hợp các tham số đã được sử dụng trước đó. Nó sẽ trả về kết quả của một function. Sử dụng nó khi bạn muốn ngăn một số thao tác nặng hoặc tốn kém tài nguyên được gọi trên mỗi lần render.

useCallback giữ cho một hàm không được tạo lại lần nữa, dựa trên mảng các phần phụ thuộc. Nó sẽ trả về chính function đó. Sử dụng nó khi mà bạn muốn truyền fuction vào component con và chặn không cho một hàm nào đó tiêu thời gian, tài nguyên phải tạo lại.

#### APP.jsx
```
import React, { useMemo, useState, useCallback } from 'react';
import Child from './child'
function App() {
  const [count, setCount] = useState(0);

  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.time("fibonacci");
  const result = fibonacci(20);
  console.timeEnd("fibonacci");

  console.time("fibonacciMemo");
  const resultMemo = useMemo(() => {
    console.time("fibonacciMemoCalculation");
    const memoizedResult = fibonacci(20); 
    console.timeEnd("fibonacciMemoCalculation");
    return memoizedResult;
  }, []);
  console.timeEnd("fibonacciMemo");

  const a = 30;
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [setCount]);



  return (
    <div className="App" style={{ padding: '10px 32px' }}>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>ResultMemo: {resultMemo}</p>
      <button
        onClick={handleClick}
      >
        increase
      </button>
      <Child value={a} handle={handleClick}/>
    </div>
  );
}

export default App;

```
#### child.tsx
```
import React from 'react';

const Child = React.memo((props) => {
    console.log("value", props.value);
    return (
        <p>{props.value}</p>
    );
});

export default Child;

```


###### Link to read more
[Note React](https://viblo.asia/p/frontend-1-so-note-co-ban-ve-react-hook-GrLZDGn2Kk0)
[Custom Hook](https://usehooks.com/)
https://react.dev/
