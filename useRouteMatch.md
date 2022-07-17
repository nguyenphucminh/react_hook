## useRouteMatch
*Lồng Route trong Route*
```
import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Topic from "./Topic";

export default () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};
```
![image](https://user-images.githubusercontent.com/59383987/179406293-64ac66c0-2ff0-45fc-9058-9a7cf0cde008.png)
