import { Component } from "react";
import icn from "./assets/dowload.svg";

import "./DButton.css";

class DButton extends Component{
    render(){
        return <div className="Dbutton">
            <img src={icn}/>
        </div>;
    }
}
export default DButton;