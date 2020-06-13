import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './scroll.styl'


// Scroll 未来会是一个容器 父组件
class Scroll extends React.Component {
    componentDidMount() {
        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);
        // console.log(this.scrollView)
        if (!this.bScroll) { //防止多次渲染 单例
            this.bScroll = new BScroll(this.scrollView, {
                probeType: 3,
                click: this.props.click
            })
            if (this.props.onScroll) {
                this.bScroll.on('scroll', (scroll) => {
                    this.props.onScroll(scroll);
                })
            }
        }
    }
    refresh() {
        if (this.bScroll) {
            this.bScroll.refresh();
        }
    }
    render() {
        return (
            <div className="scroll-view" ref="scrollView">
                {this.props.children}
            </div>
        )
    }
}

Scroll.defaultProps = {
    click: true,
    onScroll: null,
    refresh: false
}
Scroll.propTypes = {
    click: PropTypes.bool,
    onScroll: PropTypes.func,
    refresh: PropTypes.bool
}

export default Scroll;