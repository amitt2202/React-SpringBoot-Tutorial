class AuthenticationService{
    registerSuccessfulLogin(userName, password){
       // console.log("Inside registerSuccessfulLogin : "+userName);
        sessionStorage.setItem("authenticatedUser",userName);
    }

    logout(){
        //console.log("logout user");
        sessionStorage.clear("authenticatedUser");
    }

    isUserLoggedIn(){
        //console.log("Inside isUserLoggedIn");
        let user = sessionStorage.getItem("authenticatedUser");
        if(user === null){
            return false;
        }else{
            return true;
        }
    }
}
export default new AuthenticationService()