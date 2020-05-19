import React from 'react';
import Header from './Header';
import Search from './Search'
import { Link } from 'react-router-dom'
class Main extends React.Component {
    constructor() {
        super();

    }
    componentDidMount() { // 声明周期 
        console.log(this.props)
        const params = this.props.match.params;   //   /search/:searchTerm
        const searchTerm = params.searchTerm || undefined;
        console.log(searchTerm, '++++++++++++++')
        this.loadBeers(searchTerm)
    }
    loadBeers() {
        
    }
    render() {
        return(
            <div className="wrapper">
                <Header siteName="Beer me!"></Header>
                <Search />
                {/* <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Main;