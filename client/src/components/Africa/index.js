import React from "react";
import "./style.css";
import Afr from "../../images/africa.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function Africa(props) {
  return (
    <div className="mapWrapper-africa continent" style={props.currentMap === "africa" ? styleBlock : styleNone}>
      <div className="image-container-africa">
        <img className="africa" src={Afr} alt="Africa Map" />
        <div>
          <span
            className="dot Nigeria-dot"
            onClick={props.handleInputClick}
            data-search="Nigeria"
            data-type="Nigerian"
          />
           <span id="hover-nigeria" className="country-text">Nigeria</span>
          <span
            className="dot Egypt-dot"
            onClick={props.handleInputClick}
            data-search="Egypt"
            data-type="Egyptian"
          />
           <span id="hover-egypt" className="country-text">Egypt</span>
          <span
            className="dot Ethiopia-dot"
            onClick={props.handleInputClick}
            data-search="Ethiopia"
            data-type="Ethiopian"
          />
           <span id="hover-ethiopia" className="country-text">Ethiopia</span>
        </div>
      </div>
    </div>
  );
}

export default Africa;