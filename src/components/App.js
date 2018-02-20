import React, { Component } from 'react';
import periodic from 'periodic-table';
import PElement from './PElement';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            elements: Object.values(periodic.numbers)
        }
        console.log(this.state.elements[1])
    }
    
    render(){
        return(
            <div>
                {this.state.elements.map( (x, i) => <PElement key={i} {...x}/>)}
            </div>
        );
    }
}

export default App;