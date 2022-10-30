import React,{Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import withNavigation from "./WithNavigation.jsx";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import withParams from "./WithParams";
import ListTodos from "./ListTodos";

class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return(
            <div className="TodoApp">
                
                <Router>
                <HeaderComponentWithNavigation></HeaderComponentWithNavigation>
                <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                            }></Route> 
                       
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                            <ListTodos />
                            </AuthenticatedRoute>
                            } />
                        
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                            <LogoutComponent />
                            </AuthenticatedRoute>
                            } />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
                <FooterComponent></FooterComponent>
            </div>
            // <div className="TodoApp">
            //     <LoginComponent></LoginComponent>
            // </div>
        )
    }
}

export default TodoApp