import {Link,withRouter} from "react-router-dom";
//import { getUser,logout } from "../servies/authorize";
import './NavbarComponent.css';
const NavbarComponent=(props)=>{
    return(
        <div>
            <div class="navbar">
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
            </div>
    <div class="sidenav">
        <Link to="#" className="sidenav-link"><i class="fas fa-calendar-alt" ></i><span style="padding-left: 26px;">ข่าวนิสิต</span></Link>
        <Link to="#" className="sidenav-link"><i class="fas fa-book-reader"></i><span style="padding-left: 26px;">ตารางเรียน/ตารางสอบ</span></Link>
        <Link to="#" className="sidenav-link"><i class="fas fa-th"></i><span style="padding-left: 26px;">วิชาที่เปิดให้ลงทะเบียน</span></Link>
        
    </div>
    </div>
        
    );
}
export default withRouter(NavbarComponent);