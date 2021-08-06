import React from 'react';
import Products from './Products';
import Users from './Users';

import { Link, Route, Switch } from 'react-router-dom'

function Home() {
    return(
        <React.Fragment>
            <div>
                <Link to="/api/products">Products</Link>
                <Link to="/api/users">Users</Link>
                <Switch>
                    <Route path="/api/products" component={Products}/>
                    <Route path="/api/users" component={Users}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default Home