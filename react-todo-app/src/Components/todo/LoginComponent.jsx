import React, {Component} from "react";
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            username : "aranjan",
            password : "",
            showInvalidLogin : false,
            showSuccessfulLogin : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleChange(event){
        //console.log(event.target.name);
        this.setState(
            {[event.target.name] :event.target.value}
        );
    }

    loginClicked(){
        if(this.state.username === 'aranjan' && this.state.password === '1234'){
            console.log("Success");
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({showInvalidLogin:false});
            this.setState({showSuccessfulLogin:true});
        }else{
            console.log("Failed");
            this.setState({showInvalidLogin:true});
            this.setState({showSuccessfulLogin:false});
        }

    }
    // handlePasswordChange(event){
    //     this.setState(
    //         {password:event.target.value}
    //     );
    // }

    render(){
        return (
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                {this.state.showInvalidLogin &&  <div className="alert alert-warning">Invalid Login</div> }                
               
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password : <input type="Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button className="btn btn-Success" onClick={this.loginClicked}> Login</button>
                </div>
            </div>
        )
    }
}
// function ShowInvalidLogin(props){
//     if(props.showInvalidLogin){
//         return <div>Invalid Login</div>
//     }
// }
// function ShowSuccessfulLogin(props){
//     if(props.showSuccessfulLogin){
//         return <div>Successful Login</div>
//     }
// }

export default LoginComponent