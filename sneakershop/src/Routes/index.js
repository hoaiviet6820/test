import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from '../Components/Admin/Login'
import Topbar from '../Pages/Dashboard/Topbar'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login}><Login/> </Route>
            <Route path='/dashboard' component={Topbar}><Topbar/> </Route>

        </Switch>
    )
}

export default Routes