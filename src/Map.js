import React from 'react';
import './Map.css';
import L from 'leaflet'

class Map extends React.Component {

  componentDidMount() {
    //create initial map
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibGVlZGxlbGVlZCIsImEiOiJjanhqbWgybHcwenduM3ltYXV6emxja2RjIn0.4tYRYwB_1rVOpahNW1td0Q'
    }).addTo(mymap);
  }

  render() {
    return <div id="mapid"></div>
  }

}


export default Map;
