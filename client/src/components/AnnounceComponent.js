import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import './AnnounceComponent.css';
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
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="flexCheckDefault">
                        ไฟเซอร์
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" for="flexCheckChecked">
                        แอสต้าเซเนก้า
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" for="flexCheckChecked">
                        โมเดอร์นา
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" for="flexCheckChecked">
                        ซิโนฟาร์ม
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" for="flexCheckChecked">
                        ซิโนแวก
                    </label>
                    </div>        
                </div>
            </div>
        </div>
    )
}
export default AnnounceComponent;