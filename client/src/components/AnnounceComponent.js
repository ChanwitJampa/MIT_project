import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import './AnnounceComponent.css';
import {faSyringe} from "@fortawesome/free-solid-svg-icons";
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
                <div className="text-box">
                    <div className="text-line">
                        <div style={{padding:"10px"}}><h3>โรงพยาบาลกำแพงแสน</h3></div>
                        <p>47 หมู่ 4 ต.กำแพงแสน อ.กำแพงแสน จ.นครปฐม</p>
                    </div>
                    <div className="text-line">
                        <p>สถานที่ฉีดวัคซีน : อาคารคอนเวนชั่น มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</p>
                    </div>
                    <div className="text-line">
                        <p><span>วันที่ 8 - 12 กุมภาพันธ์ 2565</span>
                            <span>วันละ 500 คน</span>
                            <span>รอบเช้าเวลา 8.00-12.00</span>
                            <span>รอบบ่ายเวลา 13.00-14.00</span>
                        </p>
                    </div>
                    <div className="table-container">
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">เข็มที่</th>
                            <th scope="col">ช่วงอายุ</th>
                            <th scope="col">vaccine</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>อายุ 18 ปีขึ้นไป</td>
                            <td>แอสต้าเซเนก้า</td>
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td>เด็กอายุ 12-18 ปี</td>
                            <td>ไฟเซอร์</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td>ไฟเซอร์, แอสต้าเซเนก้า</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td>ไฟเซอร์, แอสต้าเซเนก้า</td>
                            </tr>
                        </tbody>
                        </table>  
                    </div>
                    <div className="text-line">
                        <p><span>เพิ่มเติม</span>
                            
                        </p>
                    </div>   
                </div>
                <footer>
                    <hr className="line"/>
                    <p>2022 ©ภาควิชาวิศวกรรมคอมพิวเตอร์ Kasetsart University © Version : 1.0</p>
                </footer>
            </div>
        </div>
    )
}
export default AnnounceComponent;