import React  from "react";

const Hello = () =>{
    /* 
    Using JSX
    return(
        <div className = "dummyClass">
            <h1> Hello IamNeo</h1>
        </div>
    ) */

    //without using JSX
    //return React.createElement("div",null,"h1","Hello IamNeo");wrong way
    return React.createElement(
    "div",
    {id :"hello" ,className:"dummyClass"},
    React.createElement("h1",null,"Hello IamNeo"))
}
export default Hello;