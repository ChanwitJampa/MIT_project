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
  
  const fetchData = () => {
    axios
      .get(
        `https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces`
      )
      .then((response) => {
        // console.log(response.data);
        setHospital(response.data);
        
        // hospital.forEach( (e) => {
        //   console.log(e.province);
        // })

        console.log(hospital)
      })
      .catch((err) => alert(err));
  };
  //ใช้ useEffect ในการสั่งใช้งาน fetchData ทันทีที่เปิดหน้านี้ขึ้นมา
  useEffect(() => {
    fetchData();
    console.log("Hello");
  }, []);

  const [pName, setpName] = useState("ยินดีต้อนรับ");

  return (
    <div className="container2">
      <NavbarComponent />
      <div className="mapBox">
        {/* <MapChart setTooltipContent={setContent} onChange={ value => setpName(value)} /> */}
        {/* <MapChart setTooltipContent={setContent} changeWord={ word => setpName(word)} /> */}
        <MapChart setTooltipContent={setContent} props={setpName} />
        <ReactTooltip>{content}</ReactTooltip>
        <div className="informationBox">
          <h1 className="headerInformation">HELLO</h1>
          <h1 className="provinceName">{pName}</h1>
          {/* <h1 className="provinceName">{content}</h1> */}

          {/* <h2 className="infoText">new case: +  </h2>
          <h2 className="infoText">total case: </h2>
          <h2 className="infoText">newcase excludeabroad: </h2>
          <h2 className="infoText">total case excludeabroad: </h2>
          <h2 className="infoText">new death: </h2>
          <h2 className="infoText">total death: </h2>
          <h2 className="infoText">update date: </h2> */}

          <table class="table" style={{ backgroundColor: "#FFFFFF" }}>
            <thead className="table-thead">
              <tr>
                <th scope="col">province</th>
                <th scope="col">txn_date</th>
                <th scope="col">new_case</th>
                <th scope="col">total_case</th>
                <th scope="col">new_case_excludeabroad</th>
                <th scope="col">total_case_excludeabroad</th>
                <th scope="col">new_death</th>
                <th scope="col">total_death</th>
                <th scope="col">update_date</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody className="table-tbody">
              {hospital.map((hospital) => (

                <tr>
                  {/* <td scope="row">{hospital.province}</td> */}
                  <td>{hospital.province}</td>
                  <td>{hospital.txn_date}</td>
                  <td>{hospital.new_case}</td>
                  <td>{hospital.total_case}</td>
                  <td>{hospital.new_case_excludeabroad}</td>
                  <td>{hospital.total_case_excludeabroad}</td>
                  <td>{hospital.new_death}</td>
                  <td>{hospital.total_death}</td>
                  <td>{hospital.update_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
