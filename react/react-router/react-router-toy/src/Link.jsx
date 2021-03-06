import React, { useContext } from 'react';
import { context } from './BrowserRouter';

export default function Link(props) {
    const { update, pathname } = useContext(context)
    const { to, children } = props;
    const handleClick = (e) => {
        e.preventDefault();
        window.history.pushState(null, null, to)
        // 整个页面刷新 context中存一份数据
        update({pathname: to});
    }
    return (
        <a onClick={handleClick} href={to}>
            {children}
        </a>
    )
}