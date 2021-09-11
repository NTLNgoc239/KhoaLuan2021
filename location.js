
var   Streets= L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga',
{
      maxZoom: 20
}),
Grayscale = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
{
  maxZoom: 20
}),
  Images= L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
{
    maxZoom: 18
});
var overlays = {};

const mymap = L.map('map',{
  center:[10.807708, 106.710385], 
  zoom: 20,
  layer: [Streets,overlays]
});
var baseMaps = {
  "Streets": Streets,
  "Grayscale": Grayscale,
  "Satellite":Images
};
L.control.layers(baseMaps,overlays).addTo(mymap);
var lc = L.control.locate({
  position: "topright",
  strings: {
      title: "Show me where I am, yo!"
  }
}).addTo(mymap);
Streets.addTo(mymap);

// var req = new XMLHttpRequest();
// req.open("GET", "http://127.0.0.1:8000/get-bound", false);
// req.send(null);
// console.log(JSON.parse(req.responseText));
//   // add GeoJSON layer to the map once the file is loaded
//   var datalayer = L.geoJson(JSON.parse(req.responseText) ,{
//   onEachFeature: function(feature, featureLayer) {
//   featureLayer.bindPopup(feature.properties.ten_quan);
//   }
//   }).addTo(mymap);
//   mymap.fitBounds(datalayer.getBounds());

