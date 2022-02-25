import NavbarComponent from "./NavbarComponent";
import "./RegisterComponent.css";
const RegisterComponent=()=>{
    return(
        <div>
            <NavbarComponent/>
            <div className="container">
                <div className="outer">
                    <div className="inner">
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

                            <div className="form-group">
                                <label>Hospital</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
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