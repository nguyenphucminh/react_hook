## useParams
*Dùng để truy xuất url params hiện tại trên trình duyệt*
```
import React from "react";

import { useParams } from "react-router-dom";

export default () => {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
};
```
