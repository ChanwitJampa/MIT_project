import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
const LoginComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container"> 
                <h1>Login Page</h1>
            </div>
        </div>
    )
}
export default LoginComponent;
