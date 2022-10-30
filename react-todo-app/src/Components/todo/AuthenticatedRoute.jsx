import React,{Component} from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class AuthenticateRoute extends Component{
    render(){
        
        if(AuthenticationService.isUserLoggedIn()){
            console.log("AuthenticateRoute:::    AuthenticateRoute user is logged in");
            return {...this.props.children}
        }else{
            console.log("AuthenticateRoute:::    AuthenticateRoute user is not logged in");
            return <Navigate to="/login" /> 
        }
    }
}

export default AuthenticateRoute