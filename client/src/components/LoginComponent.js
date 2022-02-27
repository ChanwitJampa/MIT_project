import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import "./LoginComponent.css";

const LoginComponent=()=>{
    
    return(
        <div>  
            <NavbarComponent/>
            <div className="container">
                <div className="outerLogin">
                    <div className="innerLogin">
                        <form >
                            <h3>Login</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="password"/>
                            </div>

                            <p className="forgot-password text-right">
                                Don't have an account <Link to="/register" >Register</Link>
                            </p>
                            
                            <button type="submit" className="btn btn-danger">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent;
