import React, { Component } from 'react';

class PElement extends Component {

    render(){
        const {name, symbol, atomicMass} = this.props;

        return(
            <div>
                <h1>{name}</h1>
                <h3>{symbol}</h3>
                <h3>{atomicMass}</h3>
            </div>
        );
    }
}

export default PElement;