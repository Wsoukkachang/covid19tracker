import React from "react";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import { Map as LeafMap, TileLayer, Marker, Popup } from "react-leaflet";
import numeral from "numeral";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, country, flag, casesType = "cases", center, zoom }) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;
  console.log("THIS IS COUNTRY POP", country);
  return (
    <div className="map">
      <LeafMap center={center} zoom={zoom}>
        <Marker position={center}>
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{ backgroundImage: `url(${flag})` }}
              ></div>
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                <strong>Cases: </strong>
                {numeral(country.cases).format("0,0")}
              </div>
              <div className="info-recovered">
                <strong>Recovered: </strong>
                {numeral(country.recovered).format("0,0")}
              </div>
              <div className="info-deaths">
                <strong>Deaths: </strong>
                {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </Popup>
        </Marker>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=0ea065ba13mshcd46c3b0a24ab40p1fdad0jsn6f4ee991f91f"
        />
        {showDataOnMap(countries, casesType)}
      </LeafMap>
    </div>
  );
}

export default Map;
