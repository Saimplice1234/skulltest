import { Component } from "react";
import gem from './assets/gem.svg';
import "./ButtonBlur.css";

class ButtonBlur extends Component{

    render(){
        return <button className="ButtonBlur" data-aos="zoom-in" data-aos-delay="400">
            <img src={gem}/>
            <p>0 zbook</p>
        </button>
    }
}
export default ButtonBlur;