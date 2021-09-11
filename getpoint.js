// axios.get('http://127.0.0.1:8000/get-point')
// .then(function(response){
//     var markers = L.markerClusterGroup({ chunkedLoading: true });
//     var geoJsonLayer = L.geoJson(response.data, {
//         onEachFeature: function (feature, layer) {
//             layer.bindPopup(feature.properties.address);
//         }
//     });

//     markers.addLayer(geoJsonLayer);

//     mymap.addLayer(markers);
// });button-watermarker
// function getpoint() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-point", false);
//     req.send(null);

//     // var markers = L.markerClusterGroup({ chunkedLoading: true });
//     var ngapMarkers = L.markerClusterGroup();
//     var ngapJson = L.geoJson(JSON.parse(req.responseText), {
//         onEachFeature: function (feature, layer) {
//             layer.bindPopup(feature.properties.address);
//         }
//     });

//     ngapMarkers.addLayer(ngapJson);
//     mymap.addLayer(ngapMarkers);

// };


// function getpoint21() {
//     var ngapJson = {};
//     mymap.removeLayer(ngapMarkers);
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-point21", false);
//     req.send(null);

//     // var markers = L.markerClusterGroup({ chunkedLoading: true });
//     var ngapMarkers = L.markerClusterGroup();
//     var ngapJson = L.geoJson(JSON.parse(req.responseText), {
//         onEachFeature: function (feature, layer) {
//             layer.bindPopup(feature.properties.address);
//         }
//     });

//     ngapMarkers.addLayer(ngapJson);
//     mymap.addLayer(ngapMarkers);

// };



