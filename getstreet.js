// var req = new XMLHttpRequest();
// req.open("GET", "http://127.0.0.1:8000/get-bound", false);
// req.send(null);
// console.log(JSON.parse(req.responseText));
// var myStyle = {
//     "color": "#f2f2f2",
//     "weight": 5,
//     "opacity": 0.65
// };
// var polygon = L.geoJSON(JSON.parse(req.responseText));
// polygon.addTo(mymap);


var req = new XMLHttpRequest();
req.open("GET", "http://127.0.0.1:8000/get-bound", false);
req.send(null);
console.log(JSON.parse(req.responseText));
  // add GeoJSON layer to the map once the file is loaded
  var datalayer = L.geoJson(JSON.parse(req.responseText) ,{
  onEachFeature: function(feature, featureLayer) {
  featureLayer.bindPopup(feature.properties.ten_quan);
  }
  }).addTo(mymap);
  mymap.fitBounds(datalayer.getBounds());
