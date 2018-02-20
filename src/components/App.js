import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import periodic from 'periodic-table';
import PElement from './PElement';

const styles = {
    col: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignItems: "center",
    },
    navBtn: {
        border: "solid 1px black",
        padding: "5px",
        textDecoration: "none",
        fontFamily: "Arial"
    }
}

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
            <BrowserRouter>
                <div>
                    <div style={styles.row}> 
                        {this.state.elements.map( (x, i) => <NavLink style={styles.navBtn} key={i} 
                                                                     to={`/${x.name}`}>
                                                                {x.name}
                                                            </NavLink>)}
                    </div>
                    <div style={styles.col}>
                        {this.state.elements.map( (x, i) => <Route key={i} 
                                                                   path={`/${x.name}`} 
                                                                   render={(props) => <PElement key={i} {...x}/>}/>)}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;