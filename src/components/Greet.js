import React  from "react";

/* function Greet(){
    return <h1> hello IamNeo</h1>
} */

//Using ES6 arrow functions is the correct conventions 
//export const Greet = () => <h1>Hello IamNeo</h1> //named export
 //const Greet = () => <h1>Hello IamNeo</h1> //named export
 const Greet = (props) =>{
    console.log(props)
    return <h1> Hello {props.name} | {props.heroName} </h1>
 }

export default Greet;