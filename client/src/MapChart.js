import React, { memo,useState }  from "react";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
// import thMap from './thailand-provinces.json'
import thMap2 from './thailand-provinces.topojson'
import './App.js'

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// const geoUrl = thMap ;
const geoUrl = thMap2 ;

const MapChart = ({ setTooltipContent, props }) => {


  const [pName, setpName] = useState("");


  return (
    <>
      {/* <ComposableMap data-tip="" projectionConfig={{ scale: 270}} width={1000} height={690}> */}
      <ComposableMap data-tip="" projectionConfig={{ scale: 1900}} width={800} height={695}>
        <ZoomableGroup center={[100,13.5]} minZoom={1} maxZoom={5}>
          <Geographies  geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME_1, ID_1 } = geo.properties;
                    setpName(NAME_1);
                    console.log("hover:");
                    console.log({pName});
                    props = pName;

                    setTooltipContent(`${NAME_1} — ${(ID_1)}`);
                  }}
                    onMouseLeave={() => {
                    setTooltipContent("");
                    // setpName("");
                    // props = pName;

                  }}

                  onClick={() => {
                    const { NAME_1, ID_1 } = geo.properties;

                    console.log("CLICK");
                    console.log({NAME_1});

                    setpName(NAME_1);
                    console.log({pName});

                    props = pName;

                    props.changeWord(pName)

                  }}


                  style={{
                    default: {
                      fill: "#000",
                      // fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      // fill: "#F53",
                      fill: "#B00020",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

// export default memo(MapChart);
export default MapChart;
