import { Component } from "react";
import gem from './assets/gem.svg';
import "./ButtonBlur.css";

class ButtonBlur extends Component{

    render(){
        return <button className="ButtonBlur">
            <img src={gem}/>
            <p>0 zbook</p>
        </button>
    }
}
export default ButtonBlur;