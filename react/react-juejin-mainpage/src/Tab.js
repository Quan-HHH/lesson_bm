import React from 'react';
import './Tab.css'

class Tab extends React.Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                {tabName: '热门', id: 1},
                {tabName: '最新', id: 2},
                {tabName: '热榜', id: 3}
            ]
        }
    }
    render() {
        console.log(this.state);
        let tabList = this.state.tabs.map((res, i) => {
            return (<li key={i}>{ res.tabName }</li>)
        })
        return (
            <div>
                <ul>
                    { tabList }
                </ul>
            </div>
        )
    }
}

export default Tab;