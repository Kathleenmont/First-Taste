import React from "react";
import "./style.css";
import SA from "../../images/south_america.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function SouthAmerica(props) {
  return (
    <div className="mapWrapper-south-america continent" style={props.currentMap === "south america" ? styleBlock : styleNone}>
      <div className="image-container-south-america">
        <img className="southAmerica" src={SA} alt="south america map" />
        <div>
          <span
            className="dot Brazil-dot"
            onClick={props.handleInputClick}
            data-search="Brazil"
            data-type="Brazilian"
          />
           <span id="hover-brazil" className="country-text">Brazil</span>
          <span
            className="dot Peru-dot"
            onClick={props.handleInputClick}
            data-search="Peru"
            data-type="Peruvian"
          />
          <span id="hover-peru" className="country-text">Peru</span>
          <span
            className="dot Colombia-dot"
            onClick={props.handleInputClick}
            data-search="Colombia"
            data-type="Colombian"
          />
          <span id="hover-colombia" className="country-text">Colombia</span>
         
        </div>
      </div>
    </div>
  );
}

export default SouthAmerica;
