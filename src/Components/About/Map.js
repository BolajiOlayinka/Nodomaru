import React from 'react';
import {GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps';

function Map(){
    <GoogleMap defaultZoom={10}
    defaultCenter={{lat:35.64816410962055,lng:139.72180020685258}}/>

}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapContent() {

    return (
        <React.Fragment>
            <div style={{width:"100vw", height:"100vh"}}>
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChRpGaD8qP3YMVwUzh5XRG9BNGF31UAHw`}
                loadingElement={<div style={{height:"100%"}}/>}
                containerElement={<div style={{height:"100%"}}/>}
                mapElement={<div style={{height:"100%"}}/>}
                />
            </div>
        </React.Fragment>
    )
}
