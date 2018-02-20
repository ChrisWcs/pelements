import React, { Component } from 'react';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        border: "solid 2px black",
        marginBottom: "10px", 
    }
}

class PElement extends Component {

    render(){
        const {name, symbol, atomicMass} = this.props;

        return(
            <div style={styles.container}>
                <h1>{name}</h1>
                <h3>{symbol}</h3>
                <h3>{atomicMass}</h3>
            </div>
        );
    }
}

export default PElement;