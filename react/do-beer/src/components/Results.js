import React from 'react';
import Beer from './Beer'
// StatefulComponent  StatelessComponent
class Results extends React.Component {
    render() {
        if(this.props.loading) {
            return <div>loading...</div>
        }
        return (
            <div className="results">
                <div className="beers">
                    {
                        this.props.beers.map((detail, i) => <Beer detail={detail} key={detail.id} />)
                    }
                </div>
            </div>
        )
    }
}

export default Results