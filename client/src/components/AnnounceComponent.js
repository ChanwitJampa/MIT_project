import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import './AnnounceComponent.css';
import {faMap, faSyringe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const AnnounceComponent=()=>{
    const [searchTrips,setSearchTrips]=useState('');
    return(
        <div>
            <NavbarComponent/>
            <div className="container"> 
                <h1>Announce</h1>
                <div className="tap-top-select">
                    <div className="tap-top-select-in">
                            <div className="tap-select">
                            <select aria-label="Default select example">
                            <option selected>เลือกจังหวัด</option>
                            <option value="1">นครปฐม</option>
                            <option value="2">ราชบุรี</option>
                            <option value="3">สุพรรณบุรี</option>
                            </select>
                        </div>
                    <div className="tap-select">
                            <select aria-label="Default select example">
                            <option selected>เลือกประเภทการลงทะเบียน</option>
                            <option value="1">Register</option>
                            <option value="2">Walk in</option>
                        </select>
                    </div>
                    <div className="tap-select">
                        <select  aria-label="Default select example">
                            <option selected>เลือกช่วงอายุ</option>
                            <option value="1">เด็ก 12-18 ปี</option>
                            <option value="2">18 ปีขึ้นไป</option>
                            <option value="3">สูงกว่า 60 ปี</option>
                        </select> 
                    </div>
                    </div>
                        <div className='search'>
                            <input 
                            type='search'
                            placeholder="ค้นหา..."
                            onChange={(event)=>{
                            setSearchTrips(event.target.value);
                            }}/>
                        </div>
                </div>
                <div className="tap-top-check">
                
                <FontAwesomeIcon icon={faSyringe} className="logo-vacc"/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">ไฟเซอร์</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label class="form-check-label" for="inlineCheckbox2">แอสต้าเซเนก้า</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                    <label class="form-check-label" for="inlineCheckbox3">โมเดอร์นา</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/>
                    <label class="form-check-label" for="inlineCheckbox4">ซิโนฟาร์ม</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5"/>
                    <label class="form-check-label" for="inlineCheckbox5">ซิโนแวก</label>
                    </div>            
                </div>
            </div>
        </div>
    )
}
export default AnnounceComponent;