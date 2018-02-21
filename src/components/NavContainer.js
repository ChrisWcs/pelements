import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    navBtn: {
        border: "solid 1px black",
        padding: "5px",
        textDecoration: "none",
        fontFamily: "Arial"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignItems: "center",
    }
}

class NavContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 0
        }
    }

    forward = () => {
        this.setState({
            index: this.state.index++
        });
    }

    backward = () => {
        this.setState({
            index: this.state.index--
        });
    }

    render(){
        return(
            <div class="row">
                <button onClick={this.backward}>
                    back
                </button>
                {this.props.elements.filter( (x, i) => ).map( (x, i) => <NavLink style={styles.navBtn} key={i} 
                                                                     to={`/${x.name}`}>
                                                                {x.name}
                                                            </NavLink>)}
                <button onClick={this.forward}>
                    forward
                </button>
            </div>
        );
    }
}

export default NavContainer;