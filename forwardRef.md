# forwardRef
## forwardRef((props, ref)) => {}
trong React, tham chiếu (refs) không thể truyền trực tiếp như props vì các lí do sau:

1. Refs thường được sử dụng để truy cập đến các phần tử DOM hoặc instance của các thành phần React, trong khi props được sử dụng để truyền dữ liệu hoặc hành động từ một thành phần đến một thành phần khác. Có nghĩa là refs có một mục đích khác biệt so với props và không nên bị lẫn lộn với nhau.

2. Trong React, props được truyền từ thành phần cha đến thành phần con thông qua cây component hierarchy (hệ thống cấp bậc). Mỗi thành phần con nhận props từ thành phần cha và không thể truy cập trực tiếp đến thành phần cha hoặc các thành phần khác cùng cấp. Trong khi đó, các tham chiếu (refs) có thể được truyền giữa các thành phần khác nhau trong cùng một cấp hoặc giữa các cấp khác nhau.

3. Refs cần phải được khởi tạo trước khi có thể được sử dụng, trong khi props có thể được truyền vào bất cứ lúc nào trong quá trình render. Do đó, việc truyền refs trực tiếp sẽ gây ra nhiều khó khăn trong việc quản lý thời điểm khởi tạo của chúng.

4. forwardRef có thể chứa props. Trong React, forwardRef là một HOC (Higher Order Component) được sử dụng để chuyển tiếp tham chiếu (refs) giữa các thành phần. Khi sử dụng forwardRef, chúng ta có thể chuyển tiếp tham chiếu đến thành phần con, cũng như các props khác.

Vì vậy, thay vì truyền refs trực tiếp, React cung cấp forward ref để cho phép các thành phần cha truy cập vào tham chiếu của các thành phần con một cách thuận tiện và an toàn.


```
import React, { forwardRef, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

```