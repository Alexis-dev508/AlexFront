import { findByLabelText } from '@testing-library/react';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//styles


export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar" >
                <li className="navbar__li"><Link to={this.props.path}>
                    {this.props.title}
                    </Link></li >
            </div>
        );
    }
}


