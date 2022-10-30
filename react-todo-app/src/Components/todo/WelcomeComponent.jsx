import React, { Component, } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component{
    constructor(){
        super();
        this.retrieveWelcomMessage = this.retrieveWelcomMessage.bind(this)
    }
    render(){
        
        return (
            <>
            <h1> Welcome</h1>
            <div className="container">
            <div>Welcome {this.props.params.name}. Please click <Link to="/todos">here</Link> to see the Todo list</div>
            </div>

            <div className="container">
            <div>
                Click Here
                <button className="btn btn-success" onClick={this.retrieveWelcomMessage}>
                    Get Welcome Message</button>
                </div>
            </div>
            </>
        )
    }
    
    retrieveWelcomMessage(){
        console.log('Hey there');
    }
}

export default WelcomeComponent