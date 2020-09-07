import React from 'react'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Detail from './pages/Detail/index'
import App from './App'
export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                exact:true,
                path: '/',
                component: Home
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/detail',
                component: Detail
            },
        ]
    }
]