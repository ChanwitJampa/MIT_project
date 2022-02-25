import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
const LoginComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container"> 
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

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div>
    )
}
export default LoginComponent;
