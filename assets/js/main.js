var mymap = L.map('mapid').setView([50.87, 8.02], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWF0dGhlczM4MDAiLCJhIjoiY2tvY2s2aGZpMW9zNDJ2bXE2N2QwcXZsdiJ9.pajxB6EE6k5ZI4DinGbORw' //Put your own access token here!!!
  }).addTo(mymap);

var rooIcon = L.icon({
  iconUrl: './assets/img/kangaroo.png',

  iconSize:     [48, 48], // size of the icon
  iconAnchor:   [25, 47], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -47] // point from which the popup should open relative to the iconAnchor
});

var markerIcon = L.icon({
  iconUrl: './assets/img/marker.png',

  iconSize:     [32, 32], // size of the icon
  iconAnchor:   [15, 31], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -31]
});

var home_marker = L.marker([50.87, 8.02], { icon: markerIcon } ).addTo(mymap);
home_marker.bindPopup("<b>Siegen, NRW</b>").openPopup();

fetch('./locations.json')
.then(response => response.json())
.then(data => {
  for (x in data) {
    var marker = L.marker([data[x].long, data[x].lat], { icon: rooIcon } ).addTo(mymap);
    marker.bindPopup("<b>" + data[x].name + "</b><br>" + data[x].adress);
  }
});


//var marker1 = L.marker([51.931760, 7.194530], { icon: rooIcon } ).addTo(mymap);
//var marker2 = L.marker([50.658420, 12.467970], { icon: rooIcon } ).addTo(mymap);
