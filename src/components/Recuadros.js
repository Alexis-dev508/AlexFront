import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//styles


export default class Recuadros extends Component{
    render(){
        return(
            <div className= { this.props.secondClass}>
                <figure>
                    <img src={this.props.src} alt={this.props.alt}/>
                    <figcaption>{this.props.figcaption}</figcaption>
                </figure>

                <div>
               <p>{this.props.title}</p> <input className="range" type="range" defaultValue={this.props.value} disabled ></input>
                </div>
            </div>
        );
    }
}