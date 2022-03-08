import React from 'react'
;
import { Route, Router, Switch } from 'react-router-dom';
import Login from '../Components/Admin/Login';
import Topbar from '../Pages/Dashboard/Topbar';


const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route exact path='/' component={Login}><Login/> </Route>
            <Route path='/dashboard' component={Topbar}><Topbar/> </Route>

        </Switch>
        </Router>
    )
}

export default Routes