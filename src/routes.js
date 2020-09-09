import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/authContext';
import Loader from './components/Loader';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function CustomRoute({isAuthPage, isPrivate, ...rest}) {
    const { authenticated, loading } = useContext(Context);

    if (loading) {
        return (
            <Loader />
        )
    }

    if (isPrivate && !authenticated) {
        return <Redirect to='/login' />
    }

    if (isAuthPage && authenticated) {
        return <Redirect to='/' />
    }

    return <Route {...rest} />
}

const Routes = () => {
    return (
        <Switch>
            <CustomRoute isAuthPage path='/login' exact component={Login} />
            <CustomRoute isPrivate path='/' exact component={Home} />
            <CustomRoute isAuthPage path='/signup' exact component={SignUp} />
        </Switch>
    )
}

export default Routes;