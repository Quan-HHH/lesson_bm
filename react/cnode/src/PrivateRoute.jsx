import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import authStore from './store/auth';

{/* <PrivateRoute path="/collect" component={Comllect }/> */}
function PrivateRoute(props) {
    const isLogin = authStore.isLogin;
    const { path, component } = props;
    if(!isLogin) {
        // 未登录
        return (
            <Redirect to='/login' />
        )
    }
    return (
        <Route path={path} component={component} />
    )
}

export default PrivateRoute;