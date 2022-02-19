import {Link,withRouter} from "react-router-dom";
//import { getUser,logout } from "../servies/authorize";
const NavbarComponent=(props)=>{
    return(
        <nav>
            <ul className="nav nav-tabs"> 
                <li className="nav-item pt-3 pb-3">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item pt-3 pb-3">
                    <Link to="/announce" className="nav-link">Announce</Link>
                </li>
                <li className="nav-item pt-3 pb-3">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item pt-3 pb-3">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                {/* 
                    <li className="nav-item pt-3 pb-3">
                        <button onClick={()=>logout(()=>props.history.push("/"))} className="nav-link">Logout</button>
                    </li>
                */}
            </ul>
        </nav>
    );
}
export default withRouter(NavbarComponent);