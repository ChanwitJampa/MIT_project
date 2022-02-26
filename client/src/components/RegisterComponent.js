import NavbarComponent from "./NavbarComponent";
import "./RegisterComponent.css";

const RegisterComponent=()=>{
    return(
        <div>
            <NavbarComponent/>
            <div className= "container">
                <div className="outerRegister">
                    <div className="innerRegister">
                        <form>
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>ID card</label>
                                <input type="text" className="form-control" placeholder="XXXXX-XXXXX-XXX" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="dropdown">
                                <label>Hospital</label>
                                <select  aria-label="Default select example">
                                    <option selected>HuaHin Hospital</option>
                                    <option value="1">Bangkok Hospital</option>
                                </select> 
                            </div>

                            <button type="submit" className="btn btn-danger">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterComponent;