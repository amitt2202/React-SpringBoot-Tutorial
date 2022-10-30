import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from './AuthenticationService.js'
class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log("isUserLoggedIn : "+isUserLoggedIn);
        return(
            <header>
              
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div> <a href="https://www.google.co.in/" className="navbar-brand"> MyWebsite </a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link to="/welcome/aranjan">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/todos" > Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to="/login"> Login </Link></li>
                    {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}> Logout </Link></li>}
                </ul>
 
            </nav>
        </header>
        )
    }
}

export default HeaderComponent