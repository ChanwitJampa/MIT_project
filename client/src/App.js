import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import { ComposableMap, Geography, Geographies } from "react-simple-maps";
import { scaleSequential } from "d3-scale";
import { interpolatePiYG } from "d3-scale-chromatic";
import axios from "axios";

import MapChart from "./MapChart";

import BarLoader from "react-spinners/BarLoader";

// function generateGdpPerCapita(geographies) {
//   let minGdpPerCapita = Infinity;
//   let maxGdpPercapita = -Infinity;
//   geographies = geographies.map((geography) => {
//     const { GDP_MD_EST, POP_EST } = geography.properties;
//     const gdpPerCapita = Math.round((GDP_MD_EST * 1e6) / POP_EST);
//     if (gdpPerCapita < minGdpPerCapita) {
//       minGdpPerCapita = gdpPerCapita;
//     }
//     if (gdpPerCapita > maxGdpPercapita) {
//       maxGdpPercapita = gdpPerCapita;
//     }
//     geography.properties.gdpPerCapita = gdpPerCapita;
//     return geography;
//   });
//   return { minGdpPerCapita, maxGdpPercapita, modifiedGeographies: geographies };
// }
// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const covidURL =
  "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces";

function App() {
  const [content, setContent] = useState("");

  const [hospital, setHospital] = useState([]);

  const [history, setHistory] = useState([]);

  const [pName, setpName] = useState("กรุณาเลือกจังหวัด");

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const override = `
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

  const fetchData = () => {
    axios
      .get(
        `https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces`
      )
      .then((response) => {
        console.log(response.data);
        // setHospital(response.data);

        setHospital(
          response.data.slice(
            response.data.length - 78,
            response.data.length - 1
          )
        );

        // const filterItem = hospital.filter(filtername => {
        //   if(filtername)
        // });

        // console.log(filterItem);

        // console.log(hospital);
        // hospital.forEach( (e) => {
        //   console.log(e.province);
        // })
      })
      .catch((err) => alert(err));

    const provinceName = "ตาก";

    // axios
    //     .get(
    //       // `http://localhost:5000/api/province`,{provinceName}
    //       // `http://localhost:5000/api/map/${provinceName}`
    //       `http://localhost:5000/api/map/${pName}`
    //     )
    //     .then((response) => {
    //       console.log("TEST API ==== === = = = ")
    //       console.log(response.data);
    //       console.log(response.data[0].new_total_1);

    //       // setHistory(response.data);
    //       setHistory(response.data);

    //       // console.log(history.new_total_1)
    //       // setHospital(response.data);

    //       // setHospital((response.data).slice(response.data.length-78,response.data.length-1));

    //       // const filterItem = hospital.filter(filtername => {
    //       //   if(filtername)
    //       // });

    //       // console.log(filterItem);

    //       // console.log(hospital);
    //       // hospital.forEach( (e) => {
    //       //   console.log(e.province);
    //       // })

    //     })
    //     .catch((err) => alert(err));
  };

  const pullHistory = (pName) => {
    if (pName != "กรุณาเลือกจังหวัด") {
      axios
        .get(
          // `http://localhost:5000/api/map/${provinceName}`
          `http://localhost:5000/api/map/${pName}`
        )
        .then((response) => {
          console.log("TEST API ==== === = = = ");
          console.log(response.data);
          console.log(response.data[0].new_total_1);

          setHistory(response.data);
        });
      // .catch((err) => alert(err));
    }
  };

  //ใช้ useEffect ในการสั่งใช้งาน fetchData ทันทีที่เปิดหน้านี้ขึ้นมา
  useEffect(() => {
    fetchData();
    console.log("Hello");
  }, []);

  useEffect(() => {
    // setHospital(hospital.filter(hospital.province == pName))
    pullHistory(pName);

    if (pName != "กรุณาเลือกจังหวัด") {
      setHistory([]);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [pName]);

  return (
    <div className="container2">
      <NavbarComponent />
      <div className="mapBox">
        {/* <MapChart setTooltipContent={setContent} onChange={ value => setpName(value)} /> */}
        {/* <MapChart setTooltipContent={setContent} changeWord={ word => setpName(word)} /> */}
        <MapChart setTooltipContent={setContent} props={setpName} />
        <ReactTooltip>{content}</ReactTooltip>
        <div className="informationBox">
          <h1 className="headerInformation">
            ยอดข้อมูลผู้ติดเชื้อโควิดในแต่ละจังหวัด
          </h1>
          <h1 className="provinceName">{pName}</h1>
          {/* <h1 className="provinceName">{hospital.province[0]}</h1> */}

          {/* <h1 className="provinceName">{content}</h1> */}

          {/* <h2 className="infoText">new case: +  </h2>
          <h2 className="infoText">total case: </h2>
          <h2 className="infoText">newcase excludeabroad: </h2>
          <h2 className="infoText">total case excludeabroad: </h2>
          <h2 className="infoText">new death: </h2>
          <h2 className="infoText">total death: </h2>
          <h2 className="infoText">update date: </h2> */}

          <table class="table" className="tableprovince" style={{ backgroundColor: "#FFFFFF",paddingRight:"50rem",paddingLeft:"50rem" }}>
            <thead className="table-thead">
              <tr>
                <th scope="col">ชื่อจังหวัด</th>
                <th scope="col">วันที่ประกาศ</th>
                <th scope="col">เคสใหม่</th>
                <th scope="col">เคสทั้งหมด</th>
                <th scope="col">ผู้ป่วยจากต่างประเทศ</th>
                <th scope="col">ยอดตายล่าสุด</th>
                <th scope="col">ยอดตายสะสม</th>
                <th scope="col">วันที่อัพเดต</th>
              </tr>
            </thead>
            <tbody className="table-tbody">
              {hospital
                .filter((province) => province.province === pName)
                .map((hospital) => (
                  // {hospital.filter(hospital.province === "จันทบุรี").map((hospital) => (

                  <tr>
                    <td>{hospital.province}</td>
                    <td>{hospital.txn_date}</td>
                    <td>{hospital.new_case}</td>
                    <td>{hospital.total_case}</td>

                    <td>
                      {hospital.new_case - hospital.new_case_excludeabroad}{" "}
                    </td>

                    <td>{hospital.new_death}</td>
                    <td>{hospital.total_death}</td>
                    <td>{hospital.update_date}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="space1"></div>

          {history.map((history) => (
            <div className="history">
              <h1 className="textHistory">
                จำนวนติดเชื้อทั้งหมดใน 1 วัน = {history.new_total_1}
              </h1>
              <h1 className="textHistory">
                จำนวนติดเชื้อทั้งหมดใน 7 วัน = {history.new_total_7}
              </h1>
              <h1 className="textHistory">
                จำนวนติดเชื้อทั้งหมดใน 30 วัน = {history.new_total_30}
              </h1>
              <h1 className="textHistory">
                จำนวนตายทั้งหมดใน 1 วัน = {history.death_total_1}
              </h1>
              <h1 className="textHistory">
                จำนวนตายทั้งหมดใน 7 วัน = {history.death_total_7}
              </h1>
              <h1 className="textHistory">
                จำนวนตายทั้งหมดใน 30 วัน = {history.death_total_30}
              </h1>
            </div>
          ))}

          <div className="space3">
            <BarLoader
              className="loadingbar"
              color={color}
              loading={loading}
              css={override}
              size={150}
            />

          </div>

          <div className="space2"></div>
        </div>
      </div>

      {/* <div className="informationBox">
        <h1>HELLO</h1>
      </div> */}

      {/* <div className="container">
        <ComposableMap projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => {
              const { minGdpPerCapita, maxGdpPercapita, modifiedGeographies } =
                generateGdpPerCapita(geographies);

              const chromaticScale = scaleSequential()
                .domain([minGdpPerCapita, maxGdpPercapita])
                .interpolator(interpolatePiYG);

              return modifiedGeographies.map((geography) => {
                const { gdpPerCapita, rsmKey } = geography.properties;
                return (
                  <Geography
                    key={rsmKey}
                    geography={geography}
                    stroke="grey"
                    strokeWidth={0.5}
                    fill={chromaticScale(gdpPerCapita)}
                  />
                );
              });
            }}
          </Geographies>
        </ComposableMap>
      </div> */}
      {/* <h1>ยินดีต้อนรับ</h1> */}
    </div>
  );
}

export default App;
