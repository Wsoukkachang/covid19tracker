import React from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map as LeafMap, TileLayer, Marker } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  Leaflet.Icon.Default.imagePath = "images/";
  return (
    <div className="map">
      <LeafMap center={center} zoom={zoom}>
        {/* <Marker position={center}></Marker> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </LeafMap>
    </div>
  );
}

export default Map;
