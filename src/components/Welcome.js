import React,{Component} from "react";//for class component import react and Component

class Welcome extends Component{
    render(){
        return( 
            <div>
        <h1>Welcome {this.props.name} | {this.props.heroName} </h1>
        {this.props.children}
        </div>
        )
    }
}

export default Welcome;