const direction = document.querySelector(".nav-item-direc");
direction.addEventListener("click", function () {
  direction.classList.toggle("active");
  document.querySelector(".findroute").classList.toggle("active");
});
const chart = document.querySelector(".nav-item-chart");
chart.addEventListener("click", function () {
  chart.classList.toggle("active");
  document.querySelector(".chart").classList.toggle("active");
});
const feedback = document.querySelector(".button-feedback");
feedback.addEventListener("click", function () {
  feedback.classList.toggle("active");
  document.querySelector(".feedback").classList.toggle("active");
});

const infomation = document.querySelector(".nav-item-infomation");
infomation.addEventListener("click", function () {
  infomation.classList.toggle("active");
  document.querySelector(".infomation").classList.toggle("active");
});

// $(document).on("click", ".cancel-student-button", function () {
//   var collapse = $(this).closest(".collapse");
//   $(collapse).collapse("toggle");
// });
// const closebtns = document.getElementsByClassName("close");
//   closebtns.addEventListener("click", function () {
//     this.parent.toggle("inactive");
//   }
// const comment = document.querySelector(".overflow-auto")
// comment.addEventListener("click", function () {
//   comment.classList.toggle("active")
//     document.querySelector(".commentidea").classList.toggle("active")
// })

// function getpoint() {
//     // Get the checkbox
//     var ngapMarkers = {};
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-point", false);
//     req.send(null);
//     results = JSON.parse(req.responseText);
//     console.log(results);
//     document.getElementById('myCheck1').onclick = function (e) {
//         mymap.on('addlayer', function(event) {
//             var layer = event.layer;

//             if (layer instanceof L.Marker && !(layer instanceof L.MarkerCluster)) {
//               layer.openPopup();
//             }
//           });
//         if (this.checked) {

//             ngapMarkers = L.markerClusterGroup().addLayer(L.geoJson(results, {
//                 onEachFeature: function (feature, layer) {
//                     // var popupText = "Địa chỉ: " + feature.properties.address;
//                     // console.log(popupText);
//                     layer.bindPopup(
//                          "Địa chỉ: " + feature.properties.address,
//                          {
//                             autoClose: false,
//                             autoPan: false
//                          });
//                     // layer.bindPopup(popupText).openPopup();
//                 }
//             }));

//             mymap.addLayer(ngapMarkers);
//         }
//         else {
//             mymap.removeLayer(ngapMarkers);
//         };

//     }

// }

function getpoint() {
  // Get the checkbox
  var markers = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
  });
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-point", false);
  req.send(null);
  results = JSON.parse(req.responseText);
  // console.log(results);
  document.getElementById("myCheck1").onclick = function (e) {
    if (this.checked) {
      var geoJsonLayer = L.geoJson(results, {
        filter: function (feature, layer) {
          return true;
          return feature.properties.type == "PRS";
        },
        pointToLayer: function (feature, latlng) {
          var label =
            "<h4>" +
            feature.properties.content +
            "<br>" +
            feature.properties.cname +
            "</h4>";
          label += feature.properties.address + "<br>";

          var pMarker = new L.Marker(latlng, {
            title: feature.properties.content,
          });
          pMarker = new L.CircleMarker(latlng, {
            title: feature.properties.content,
            radius: 10,
            color: "#fe0611",
            weight: 2,
            fillOpacity: 0.5,
            fillColor: "yellow",
          });
          pMarker.bindPopup(label);
          markers.addLayer(pMarker);
          return pMarker;
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup(
            "Địa chỉ: " +
              feature.properties.address +
              ".</br>" +
              "Nội dung: " +
              feature.properties.content +
              ".</br>" +
              feature.properties.status
          );
        },
      });

      // Add geoJsonLayer to markercluster group

      markers.on("clusterclick", function (a) {
        console.log("Cluster Clicked:" + a);
      });
      markers.on("click", function (a) {
        console.log("Marker Clicked:" + a);
      });

      // Add the markercluster group to the map
      mymap.addLayer(markers);
    } else {
      mymap.removeLayer(markers);
    }
  };
}

function getpoint21() {
  // Get the checkbox
  var markers = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
  });
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-point21", false);
  req.send(null);
  results = JSON.parse(req.responseText);
  console.log(results);
  document.getElementById("myCheck2").onclick = function (e) {
    if (this.checked) {
      var geoJsonLayer = L.geoJson(results, {
        filter: function (feature, layer) {
          return true;
          return feature.properties.type == "PRS";
        },
        pointToLayer: function (feature, latlng) {
          var label =
            "<h4>" +
            feature.properties.content +
            "<br>" +
            feature.properties.cname +
            "</h4>";
          label += feature.properties.address + "<br>";

          var pMarker = new L.Marker(latlng, {
            title: feature.properties.content,
          });
          pMarker = new L.CircleMarker(latlng, {
            title: feature.properties.content,
            triangle: 10,
            color: "#14ade1",
            weight: 2,
            fillOpacity: 0.5,
            fillColor: "red",
          });
          pMarker.bindPopup(label);
          markers.addLayer(pMarker);
          return pMarker;
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup(
            "Địa chỉ: " +
              feature.properties.address +
              ".</br>" +
              "Nội dung: " +
              feature.properties.content +
              ".</br>" +
              feature.properties.status
          );
        },
      });

      // Add geoJsonLayer to markercluster group

      markers.on("clusterclick", function (a) {
        console.log("Cluster Clicked:" + a);
      });
      markers.on("click", function (a) {
        console.log("Marker Clicked:" + a);
      });

      // Add the markercluster group to the map
      mymap.addLayer(markers);
    } else {
      mymap.removeLayer(markers);
    }
  };
}
