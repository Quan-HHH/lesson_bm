import React from 'react'

const context = React.createContext();

class BrowserRouter extends React.Component {
    state = {
        pathname: '/'
    }
    update = (pathinfo) => {
        // this.forceUpdate();
        this.setState(pathinfo)
    }
    componentDidMount() {
        window.addEventListener('popstate', () => {
            this.setState({
                pathname: window.location.pathname,
            })
        })
    }
    render() {
        return (
            <context.Provider value={
                {
                    pathname: this.state.pathname, 
                    update: this.update
                    }
                }>
                {this.props.children}
            </context.Provider>
        )
    }
}
export {context, BrowserRouter};