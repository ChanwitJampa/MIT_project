import NavbarComponent from "./NavbarComponent";
import { useEffect, useState } from "react";
import "./RegisterComponent.css";
import axios from "axios";

const RegisterComponent=()=>{
    const [hospital,setHospital]=useState([])
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        idCard:"",
        email:"",
        password:"",
        hospitalName:"",
        hospitalID:"",
    })
    const fetchData=()=>{
        axios.get(`http://localhost:5000/api/hospitals`).then(res=>{
          setHospital(res.data)
          console.log(res.data)
          console.log(res.status)
        })
        
    }
    useEffect(()=>{
        fetchData()
    },[])

    const {firstName,lastName,idCard,email,password,hospitalName,hospitalID}=user
    const signupForm=(event)=>{
        event.preventDefault();
        axios.post(`http://localhost:5000/api/user`,{firstName,lastName,idCard,email,password,hospitalName,hospitalID}).then(res=>{
            console.log(res.data)
            setUser({...user,
            firstName:"",
            lastName:"",
            idCard:"",
            email:"",
            password:"",
            hospitalName:"",
            hospitalID:""})
        })
    }

    return(
        <div>
            <NavbarComponent/>
            <div className= "container">
                <div className="outerRegister">
                    <div className="innerRegister">
                        <form onSubmit={signupForm}>
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
                                <select  aria-label="Default select example">
                                    <option selected disabled>Hospital</option>
                                    {hospital.map((hospital) => (
                                    <option value={hospital._id}>{hospital.hospitalName}</option>
                                    ))}
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