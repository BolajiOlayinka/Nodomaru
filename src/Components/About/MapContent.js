import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const MapContent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyChRpGaD8qP3YMVwUzh5XRG9BNGF31UAHw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `400px` }} />,
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 35.64816410962055, lng: 139.72180020685258 }}
  >
    <Marker
      position={{ lat: 35.64816410962055, lng: 139.72180020685258 }}
      onClick={props.onToggleOpen}
    />
  </GoogleMap>
));

export default MapContent;
