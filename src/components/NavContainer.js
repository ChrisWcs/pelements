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

    handleChange = (event) => {
        const {value} = event.target;
        let myVal = value;
        if(myVal < 0 || myVal > 117 || myVal === ""){
            myVal = 0;
        }
        this.setState({
            index: myVal
        });
    }

    render(){
        console.log(this.props.elements);
        const {index} = this.state;
        const {elements} = this.props;
        const eleName = elements[index].name;
        return(
            <div style={styles.row}>
                <input type="number" value={this.index} onChange={this.handleChange}/>
                <NavLink style={styles.navBtn} to={`${eleName}`}>
                    Go to Element
                </NavLink>
            </div>
        );
    }
}

export default NavContainer;