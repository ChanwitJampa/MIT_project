import NavbarComponent from "./NavbarComponent";
import "./AddAnnounceComponent.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
const AddAnnounceComponent=()=>{
    return(
        <div>
            <NavbarComponent/>
            <div className="container"> 
                <h1>เขียนประกาศ</h1>
                <div className="content-box">
                    <h4>โรงพยาบาลกำแพงแสน</h4>
                    <p>สถานที่ฉีดวัคซีน</p>
                    <input type="text" className="input-text" placeholder="ex มหาวิทยาลัยเกษตรศาสตร์"/>
                    <p>จำนวนวัน</p>
                    <div style={{display:"flex"}}>
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">1 วัน</label>
                        <input type="date"/>
                    </div>
                    <div style={{display:"flex"}}>
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">หลายวัน</label>
                        <input type="date"/>
                        ถึงวันที่
                        <input type="date"/>
                    </div>
                    <p>จำนวนคน</p>
                    <input type="number" className="input-text" placeholder="ex 500, 3000"/>
                    <p>เวลารอบเช้า</p>
                    <input type="time"/>
                    <p>เวลารอบบ่าย</p>
                    <input type="time"/>
                    <div className="text-line">
                        <p>วัคซีน</p>
                        <div className="tap-top-select-in">
                            <div className="tap-select">
                            <select aria-label="Default select example">
                            <option selected>เลือกเข็มที่</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
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
                    <div className="tap-select">
                            <select aria-label="Default select example">
                            <option selected>เลือกวัคซีน</option>
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
                    <div className="text-line">
                        <p>ประเภทการลงทะเบียน</p>
                        <div className="tap-select">
                            <select aria-label="Default select example">
                            <option selected>เลือกวัคซีน</option>
                            <option value="1">Register</option>
                            <option value="2">Walk in</option>
                        </select>
                        </div>
                    </div>
                    <p>ลิงค์ลงทะเบียน (สำหรับแบบลงทะเบียน)</p>
                        <input type="text" className="input-text" placeholder= "ex http://hospitalnakornpathom.com"/>
                    <p>คิวอาโค้ด (สำหรับแบบลงทะเบียน)</p>
                        <input type="file"/>
                    <p>ประกาศเพิ่มเติม</p>
                        <textarea type="text" />
                </div>
            </div>
        </div>
    )
}
export default AddAnnounceComponent;