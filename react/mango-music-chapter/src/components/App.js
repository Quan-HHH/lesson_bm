import React from 'react';
// router 是路由总管 负责让我们的应用单页化
// Router 每个路由规则
// Switch 唯一
// NavLink a标签的组件化
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';

// https://music.163.com/#/my/ hashRouter  兼容性更好
// https://y.music.163.com/m/  historyRouter  更语义化=
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    {/* 不变的地方 头部 导航 */}
                    <header className="app-header">
                        <img src={logo} alt="logo" className="app-logo" />
                        <h1 className="app-title">Mango Music</h1>
                    </header>
                    <div className="music-tab">
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/recommend"><span>推荐</span></NavLink>
                        </div>
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/ranking"><span>排行榜</span></NavLink>
                        </div>

                        <div className="tab-item">
                            <NavLink className="nav-link" to="/search"><span>搜索</span></NavLink>
                        </div>

                    </div>
                    <Switch>
                        <Route path="/recommend" component={Recommend} />
                        <Route path="/ranking" component={Ranking} />
                        <Route path="/search" component={Search} />
                        <Redirect from="/" to="recommend" />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;