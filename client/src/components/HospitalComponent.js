import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
const HospitalComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container"> 
                <h1>Hospital</h1>
                <div>
<select class="mdb-select " searchable="Search here..">
  <option value="1">เลือกจังหวัด</option>
  <option value="1">กรุงเทพมหานคร</option>
  <option value="2">กระบี่</option>
  <option value="3">กาญจนบุรี</option>
  <option value="4">กาฬสินธุ์</option>
  <option value="5">กำแพงเพชร</option>
  <option value="6">ขอนแก่น</option>
  <option value="7">จันทบุรี</option>
  <option value="8">ฉะเชิงเทรา</option>
  <option value="9">ชลบุรี</option>
  <option value="10">ชัยนาท</option>
  <option value="11">ชัยภูมิ</option>
  <option value="12">ชุมพร</option>
  <option value="13">เชียงราย</option>
  <option value="14">เชียงใหม่</option>
  <option value="15">ตรัง</option>
  <option value="16">ตราด</option>
  <option value="17">ตาก</option>
  <option value="18">นครนายก</option>
  <option value="19">นครปฐม</option>
  <option value="20">นครพนม</option>
  <option value="21">นครราชสีมา</option>
  <option value="22">นครศรีธรรมราช</option>
  <option value="23">นครสวรรค์</option>
  <option value="24">นนทบุรี</option>
  <option value="25">นราธิวาส</option>
  <option value="26">น่าน</option>
  <option value="27">บึงกาฬ</option>
  <option value="28">บุรีรัมย์</option>
  <option value="29">ปทุมธานี</option>
  <option value="30">ประจวบคีรีขันธ์</option>
  <option value="31">ปราจีนบุรี</option>
  <option value="32">ปัตตานี</option>
  <option value="33">พระนครศรีอยุธยา</option>
  <option value="34">พังงา</option>
  <option value="35">พัทลุง</option>
  <option value="36">พิจิตร</option>
  <option value="37">พิษณุโลก</option>
  <option value="38">เพชรบุรี</option>
  <option value="39">เพชรบูรณ์</option>
  <option value="40">แพร่</option>
  <option value="41">พะเยา</option>
  <option value="42">ภูเก็ต</option>
  <option value="43">มหาสารคาม</option>
  <option value="44">มุกดาหาร</option>
  <option value="45">แม่ฮ่องสอน</option>
  <option value="46">ยะลา</option>
  <option value="47">ยโสธร</option>
  <option value="48">ร้อยเอ็ด</option>
  <option value="49">ระนอง</option>
  <option value="50">ระยอง</option>
  <option value="51">ราชบุรี</option>
  <option value="52">ลพบุรี</option>
  <option value="53">ลำปาง</option>
  <option value="54">ลำพูน</option>
  <option value="55">เลย</option>
  <option value="56">ศรีสะเกษ</option>
  <option value="57">สกลนคร</option>
  <option value="58">สงขลา</option>
  <option value="59">สตูล</option>
  <option value="60">สมุทรปราการ</option>
  <option value="61">สมุทรสงคราม</option>
  <option value="62">สมุทรสาคร</option>
  <option value="63">สระแก้ว</option>
  <option value="64">สระบุรี</option>
  <option value="65">สิงห์บุรี</option>
  <option value="66">สุโขทัย</option>
  <option value="67">สุพรรณบุรี</option>
  <option value="68">สุราษฎร์ธานี</option>
  <option value="69">สุรินทร์</option>
  <option value="70">หนองคาย</option>
  <option value="71">หนองบัวลำภู</option>
  <option value="72">อ่างทอง</option>
  <option value="73">อุดรธานี</option>
  <option value="74">อุทัยธานี</option>
  <option value="75">อุตรดิตถ์</option>
  <option value="76">อุบลราชธานี</option>
  <option value="77">อำนาจเจริญ</option>
</select>

<select class="mdb-select" searchable="Search here..">
  <option value="1" disabled selected>เลือกอำเภอ</option>
  <option value="1">เมืองนครปฐม</option>
  <option value="2">กำแพงแสน</option>
  <option value="3">ดอนตูม</option>
  <option value="4">นครชัยศรี</option>
  <option value="5">บางเลน</option>
  <option value="6">พุทธมณฑล</option>
  <option value="7">สามพราน</option>
</select>

<select class="mdb-select" searchable="Search here..">
  <option value="1" disabled selected>เลือกตำบล</option>
  <option value="1">โพรงมะเดื่อ</option>
  <option value="2">ดอนยายหอม</option>
  <option value="3">ตาก้อง</option>
  <option value="4">ถนนขาด</option>
  <option value="5">ทัพหลวง</option>
  <option value="6">ทุ่งน้อย</option>
  <option value="7">ธรรมศาลา</option>
  <option value="8">นครปฐม</option>
  <option value="9">บ่อพลับ</option>
  <option value="10">บางแขม</option>
  <option value="11">บ้านยาง</option>
  <option value="12">พระปฐมเจดีย์</option>
  <option value="13">พระประโทน</option>
  <option value="14">มาบแค</option>
  <option value="15">ลำพญา</option>
  <option value="16">วังเย็น</option>
  <option value="17">วังตะกู</option>
  <option value="18">สนามจันทร์</option>
  <option value="19">สระกะเทียม</option>
  <option value="20">สวนป่าน</option>
  <option value="21">สามความยเผือก</option>
  <option value="22">หนองงูเหลือม</option>
  <option value="23">หนองดินแดง</option>
  <option value="24">หนองปากโลง</option>
  <option value="25">ห้วยจระเข้</option>
  <option value="26">กระตีบ</option>
  <option value="27">กำแพงแสน</option>
  <option value="28">ดอนข่อย</option>
  <option value="29">ทุ่งกระพังโหม</option>
  <option value="30">ทุ่งขวาง</option>
  <option value="31">ทุ่งบัว</option>
  <option value="32">ทุ่งลูกนก</option>
  <option value="33">รางพิกุล</option>
  <option value="34">วังน้ำเขียว</option>
  <option value="35">สระพัฒนา</option>
  <option value="36">สระสี่มุม</option>
  <option value="37">หนองกระทุ่ม</option>
  <option value="38">ห้วยขวาง</option>
  <option value="39">ห้วยม่วง</option>
  <option value="40">ห้วยหมอนทอง</option>
  <option value="41">ดอนพุทรา</option>
  <option value="42">ดอนรวก</option>
  <option value="43">บ้านหลวง</option>
  <option value="44">ลำเหย</option>
  <option value="45">ลำลูกบัว</option>
  <option value="46">สามง่าม</option>
  <option value="47">ห้วยด้วน</option>
  <option value="48">ห้วยพระ</option>
  <option value="49">แหลมบัว</option>
  <option value="50">โคกพระเจดีย์</option>
  <option value="51">ไทยาวาส</option>
  <option value="52">ขุนแก้ว</option>
  <option value="53">งิ้วราย</option>
  <option value="54">ดอนแฝก</option>
  <option value="55">ท่ากระชับ</option>
  <option value="56">ท่าตำหนัก</option>
  <option value="57">ท่าพระยา</option>
  <option value="58">นครชัยศรี</option>
  <option value="59">บางแก้ว</option>
  <option value="60">บางแก้วฟ้า</option>
  <option value="61">บางกระเบา</option>
  <option value="62">บางพระ</option>
  <option value="63">บางระกำ</option>
  <option value="64">พะเนียด</option>
  <option value="65">ลานตากฟ้า</option>
  <option value="66">วัดแค</option>
  <option value="67">วัดละมุด</option>
  <option value="68">วัดสำโรง</option>
  <option value="69">ศรีมหาโพธิ์</option>
  <option value="70">ศรีษะทอง</option>
  <option value="71">สัมปทวน</option>
  <option value="72">ห้วยพลู</option>
  <option value="73">ไทรงาม</option>
  <option value="74">ไผ่หูช้าง</option>
  <option value="75">คลองนกกระทุง</option>
  <option value="76">ดอนตูม</option>
  <option value="77">นราภิรมย์</option>
  <option value="78">นิลเพชร</option>
  <option value="79">บัวปากท่า</option>
  <option value="80">บางเลน</option>
  <option value="81">บางไทรป่า</option>
  <option value="82">บางปลา</option>
  <option value="83">บางภาษี</option>
  <option value="84">บางระกำ</option>
  <option value="85">บางหลวง</option>
  <option value="86">ลำพญา</option>
  <option value="87">หินมูล</option>
  <option value="88">คลองโยง</option>
  <option value="89">มหาสวัสดิ์</option>
  <option value="90">ศาลายา</option>
  <option value="91">ไร่ขิง</option>
  <option value="92">กระทุ่มล้ม</option>
  <option value="93">คลองใหม่</option>
  <option value="94">คลองจินดา</option>
  <option value="95">ตลาดจินดา</option>
  <option value="96">ทรงคนอง</option>
  <option value="97">ท่าข้าม</option>
  <option value="98">ท่าตลาด</option>
  <option value="99">บางเตย</option>
  <option value="100">บางกระทึก</option>
  <option value="101">บางช้าง</option>
  <option value="102">บ้านใหม่</option>
  <option value="103">ยายชา</option>
  <option value="104">สามพราน</option>
  <option value="105">หอมเกร็ด</option>
  <option value="106">อ้อมใหญ่</option>
</select>

  <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">โรงพยาบาล</th>
      <th scope="col">วันที่ให้บริการ</th>
      <th scope="col">จำนวนที่รองรับ/วัน</th>
      <th scope="col">ชนิดวัคซีน</th>
      <th scope="col">การลงทะเบียน</th>
      <th scope="col">เพิ่มประกาศ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">โรงพยาบาลกำแพงแสน</th>
      <td>7-9 กุมภาพันธ์</td>
      <td>500</td>
      <td>ไฟเซอร์,แอสต้า</td>
      <td>walk in</td>
      <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">+ADD</button>
    </tr>
  </tbody>
</table>
<button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">+ADD</button>
    </div>
            </div>
        </div>
    )
}
export default HospitalComponent;