import { Component } from "react";
import ButtonBlur from "./ButtonBlur";
import Avatar from "./Avatar";
import "./Navbar.css";
import logo from './assets/logo.png';
import Dbutton from "./DButton";


class Navbar extends Component{
    render(){
        return <div className="Navbar">

            <div className="logo-nav">
                Skull Library
            </div>

            
            <div className="btn-group">
                <Dbutton/>
                <Avatar/>
                <ButtonBlur/>
                
            </div>
            
        </div>
    }
}

export default Navbar;