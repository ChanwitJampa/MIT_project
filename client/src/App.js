import logo from "./logo.svg";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import { ComposableMap, Geography, Geographies } from "react-simple-maps";
import { scaleSequential } from "d3-scale";
import { interpolatePiYG } from "d3-scale-chromatic";

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

function App() {
  const [content, setContent] = useState("");


  const [name, setName] = useState("blank")

  const [pName, setpName] = useState("test");


  return (
    <div className="container2">
      <NavbarComponent />
      <div className="mapBox">
        <MapChart setTooltipContent={setContent} onChange={ value => setpName(value)} />
        <ReactTooltip>{content}</ReactTooltip>
        <div className="informationBox">
          <h1 className="headerInformation">HELLO</h1>
          <h1 className="provinceName">{pName}</h1>

          <h2 className="infoText">new case: </h2>
          <h2 className="infoText">total case: </h2>
          <h2 className="infoText">newcase excludeabroad: </h2>
          <h2 className="infoText">total case excludeabroad: </h2>
          <h2 className="infoText">new death: </h2>
          <h2 className="infoText">total death: </h2>
          <h2 className="infoText">update date: </h2>


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
