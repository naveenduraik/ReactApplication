import React, { Component } from "react";
import Welcome from "./Welcome";

class Message extends Component{

    constructor(){
        super()
        this.state = {//creating state object
            message : "Welcome Visitor"//binding values
        }
    }
    render(){
        return <h1>{this.state.message}</h1>
    }
}

export default Message;