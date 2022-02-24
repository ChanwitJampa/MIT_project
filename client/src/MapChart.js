import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
// import thMap from './thailand-provinces.json'
import thMap2 from './thailand-provinces.topojson'

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// const geoUrl = thMap ;
const geoUrl = thMap2 ;

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      {/* <ComposableMap data-tip="" projectionConfig={{ scale: 270}} width={1000} height={690}> */}
      <ComposableMap data-tip="" projectionConfig={{ scale: 1000}}>
        <ZoomableGroup center={[115,8]}>
          <Geographies  geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
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

export default memo(MapChart);
