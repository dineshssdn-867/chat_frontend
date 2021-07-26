import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import "../styles/style.scss";

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/register' component={Register} exact />
            <Route path='/' component={Home} exact />
        </Switch>
    </BrowserRouter>
}

export default Router;