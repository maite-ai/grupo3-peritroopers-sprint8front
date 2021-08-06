import React from 'react';
import Home from './Home';
import Topbar from './Topbar';
import Products from './Products';
import Users from './Users';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div>
        <Topbar/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/api/products" component={Products}/>
          <Route path="/api/users" component={Users}/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;