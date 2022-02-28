import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import "./HospitalComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";
const HospitalComponent = () => {
  const [hospital, setHospital] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const fetchData = () => {
    axios
      .get("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces")
      .then((res) => {
        console.log(res.data.data);
        setProvinces(res.data.data);
      });
    axios
      .get("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/")
      .then(res=>{
        console.log(res.data.district);
        setProvinces.district(res.data.district);
      })
    axios
      .get(`http://localhost:5000/api/hospitals`)
      .then((response) => {
        //console.log(response.data)
        setHospital(response.data);
      })
      .catch((err) => alert(err));
  };
  //ใช้ useEffect ในการสั่งใช้งาน fetchData ทันทีที่เปิดหน้านี้ขึ้นมา
  useEffect(() => {
    fetchData();
    console.log("Hello");
  }, []);
  //ลบโรงพยาบาล
  const confrimDelete = (id) => {
    //axios.delete(`${process.env.REACT_APP_API}/blog`)
    Swal.fire({
      title: "คุณต้องการลบโรงพยาบาลหรือไม่?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHospital(id);
      }
    });
  };
  const deleteHospital = (id) => {
    axios
      .delete(`http://localhost:5000/api/hospitals/${id}`)
      .then((response) => {
        Swal.fire("Deleted", response.data.message, "success");
        fetchData();
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1>Hospital</h1>
        <div className="tap-top-select">
          <div className="tap-top-select-in">

            <div className="tap-select">
              <select class="mdb-select " searchable="Search here..">
              <option value="1" disabled selected>เลือกจังหวัด</option>
                {provinces.map((provinces) => (
                  <option value="1">{provinces.province}</option>
                ))}
              </select>
            </div>
            <div className="tap-select">
              <select class="mdb-select" searchable="Search here..">
                <option value="1" disabled selected>เลือกอำเภอ</option>
                {provinces.map((provinces) => (
                  <option value="1">{provinces.province.district}</option>
                ))}
              </select>
            </div>
            <div className="tap-select">
              <select class="mdb-select" searchable="Search here..">
                <option value="1" disabled selected>
                  เลือกตำบล
                </option>
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
            </div>
          </div>
          <div className="search">
            <input type="search" placeholder="ค้นหา..." />
          </div>
        </div>

        <table class="table" style={{ backgroundColor: "#FFFFFF" }}>
          <thead className="table-thead">
            <tr>
              <th scope="col">โรงพยาบาล</th>
              <th scope="col">อำเภอ</th>
              <th scope="col">จังหวัด</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-tbody">
            {hospital.map((hospital) => (
              <tr>
                <td scope="row">{hospital.hospitalName}</td>
                <td>{hospital.district}</td>
                <td>{hospital.province}</td>
                <td>
                  <Link
                    to={`/edithospital/${hospital._id}`}
                    type="button"
                    class="btn btn-primary"
                  >
                    <FontAwesomeIcon icon={faAdd} />
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => confrimDelete(hospital._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/addhospital" type="button" className="button-addnew">
          <FontAwesomeIcon icon={faAdd} />
          Add New
        </Link>
      </div>
    </div>
  );
};
export default HospitalComponent;
