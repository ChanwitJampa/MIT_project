import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
const HospitalComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container"> 
                <h1>Hospital</h1>
            </div>
        </div>
    )
}
export default HospitalComponent;