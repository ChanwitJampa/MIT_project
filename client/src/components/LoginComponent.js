import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import "./LoginComponent.css";
const LoginComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container">
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Login</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
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
