import NavbarComponent from "./NavbarComponent";
import "./AddAnnounceComponent.css";
import { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import TaskList from "./TaskList";
const AddAnnounceComponent=()=>{
    const [allhospital, setAllHospital] = useState([]);
    const [hospitalID, setHospitalID] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [state,setState]=useState({
        vaccinationSite:"",
        DateStart:"",
        DateEnd:"",
        numberPeople:"",
        vaccine:"",
        registrationType:"",
        linkRegistration:"",
        image:"",
        more:""
    })
    const inputHospital=(id)=>{
        console.log(id);
        const Name = allhospital.filter((hospital)=>{
            if(hospital._id===id){
                return hospital
            }
        }).map((hospital)=>{
            return hospital.hospitalName
        })
        setHospitalName(Name.toString());
        setHospitalID(id);
    }
    const inputValue = (name) => (event) => {
        console.log(name, "=", event.target.value);
        setState({ ...state, [name]: event.target.value });
    };
    const {
        vaccinationSite,
        DateStart,
        DateEnd,
        numberPeople,
        vaccine,
        registrationType,
        linkRegistration,
        image,
        more}=state
    
    const submitForm = (event) => {
        event.preventDefault();
        console.table({
            hospitalID,
            hospitalName,
            vaccinationSite,
            DateStart,
            DateEnd,
            numberPeople,
            vaccine,
            registrationType,
            linkRegistration,
            image,
            more
        });
        axios.post(`http://localhost:5000/api/announces`, {
            hospitalID,
            hospitalName,
            vaccinationSite,
            DateStart,
            DateEnd,
            numberPeople,
            vaccine,
            registrationType,
            linkRegistration,
            image,
            more
          })
          .then(response => {
            Swal.fire("Alert", "บันทึกข้อมูลเรียบร้อย", "success");
            setState({
              ...state,
                vaccinationSite:"",
                DateStart:"",
                DateEnd:"",
                numberPeople:"",
                vaccine:"",
                registrationType:"",
                linkRegistration:"",
                image:"",
                more:""
            });
            
          })
          .catch(error=> {
            Swal.fire(
              "Alert",
              error.response.data.error,
              "error"
            );
          });
      };
    const fetchData = () => {
        axios
          .get(`http://localhost:5000/api/hospitals`)
          .then((res) => {
            setAllHospital(res.data);
          });
    };
    useEffect(()=>{
        fetchData();
    })

    const [taskList,setTaskList]= useState({ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" });
    const addNewRow = () => {
        setTaskList((prevState)=>{
            return [...prevState,{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }]
        })
    }
    const deteteRow = (index) => {
        setTaskList(()=>{
            taskList.filter((s, sindex)=>index !== sindex)
        })
    }
   

    return(
        <div>
            <NavbarComponent/>
            <div className="container"> 
                <h1>เขียนประกาศ</h1>
                <div className="content-box">
                    <h4>โรงพยาบาล</h4>
                    <form onSubmit={submitForm} >
                    <div class="form-group pb-4 col-md-4">
                    <select class="form-select" onChange={(event)=>inputHospital(event.target.value)}>
                        <option selected disabled>เลือกโรงพยาบาล</option>
                        {allhospital.map((hospital) => (
                        <option value={hospital._id}>{hospital.hospitalName}</option>
                        ))}
                    </select>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>สถานที่ฉีดวัคซีน</label>
                    <input type="text" className="form-control" placeholder="ex มหาวิทยาลัยเกษตรศาสตร์" onChange={inputValue("vaccinationSite")}/>
                    </div>
                    <div className="form-group">
                    <label>จำนวนวัน</label>
                    <select class="form-select" searchable="Search here.." >
                              <option value="1" disabled selected>เลือกจำนวนวัน</option>
                              <option value="1">1 วัน</option>
                              <option value="2">หลายวัน</option>
                    </select>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>ระยะเวลา</label>
                    <div className="text-line">
                        <input type="date" className="form-control" onChange={inputValue("DateStart")}/>
                        <span style={{padding:"0px 30px 0px 30px"}}>ถึง</span>
                        <input type="date" className="form-control" onChange={inputValue("DateEnd")}/>
                    </div>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>จำนวนคนน</label>
                    <input type="number" className="form-control" placeholder="ex 500, 3000" onChange={inputValue("numberPeople")}/>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                        <label>ตั้งแต่เวลา</label>
                        <div className="text-line">
                        <input type="time" className="form-control"/>
                        <span style={{padding:"0px 30px 0px 30px"}}>ถึง</span>
                        <input type="time" className="form-control"/>
                        </div>
                    </div>
                    <div class="form-group pb-4 col-md-2">
                        <span>วัคซีน</span>
                        <div className="text-line">
                        <div className="tap-top-select-in">
                        <div className="tap-select">
                            <select class="form-select" aria-label="Default select example">
                            <option disabled selected>เลือกเข็มที่</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                        </div>
                        <div className="tap-select">
                            <select class="form-select" aria-label="Default select example">
                                <option disabled selected>เลือกช่วงอายุ</option>
                                <option value="1">เด็ก 12-18 ปี</option>
                                <option value="2">18 ปีขึ้นไป</option>
                                <option value="3">สูงกว่า 60 ปี</option>
                            </select> 
                        </div>
                        <div className="tap-select">
                            <select aria-label="Default select example">
                            <option disabled selected>เลือกวัคซีน</option>
                            <option value="1">ไฟเซอร์</option>
                            <option value="2">แอสต้าเซเนก้า</option>
                            <option value="3">โมเดอร์นา</option>
                            <option value="4">ซิโนฟาร์ม</option>
                            <option value="5">ซิโนแวก</option>
                        </select>
                    </div>
                    </div>
                    <button type="button" className="button-vaccine"><FontAwesomeIcon icon={faAdd}/>Add vaccine</button>
                    </div>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                        
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>ประเภทการลงทะเบียน</label>
                    <select class="form-select" searchable="Search here.." onChange={inputValue("registrationType")}>
                              <option value="" disabled selected>เลือกเภท</option>
                              <option value="register">Register</option>
                              <option value="walkin">Walk in</option>
                    </select>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>ลิงค์ลงทะเบียน (สำหรับแบบลงทะเบียน)</label>
                    <input type="url"  className="form-control" onChange={inputValue("linkRegistration")} placeholder= "ex http://hospitalnakornpathom.com"/>
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>เพิ่มไฟล์รูปคิวอาโค้ด (สำหรับแบบลงทะเบียน)</label>
                    <input type="file"  className="form-control" onChange={inputValue("image")} />
                    </div>
                    <div class="form-group pb-4 col-md-4">
                    <label>ประกาศเพิ่มเติม</label>
                    <textarea  type="text" className="form-control" onChange={inputValue("more")} ></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="button-announce"><FontAwesomeIcon icon={faAdd}/>Add announce</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddAnnounceComponent;