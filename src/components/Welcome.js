import React,{Component} from "react";//for class component import react and Component

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} | {this.props.heroName} </h1>
    }
}

export default Welcome;