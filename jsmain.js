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

// _doc.on("click", ".bnt", function () {
//   this.parentElement.removeClass(".findroute");
// });
const close = document.querySelector(".close");
const find = document.querySelector(".findroute");
close.addEventListener("click", function () {
  if (find.classList.toggle("active"))
    document.querySelector(".findroute").remove();
});

const close1 = document.querySelector(".close1");
const chart1 = document.querySelector(".chart");
close1.addEventListener("click", function () {
  if (chart1.classList.toggle("active"))
    document.querySelector(".chart").remove();
});

const close2 = document.querySelector(".close2");
const info1 = document.querySelector(".infomation");
close2.addEventListener("click", function () {
  if (info1.classList.toggle("active"))
    document.querySelector(".infomation").remove();
});

const close3 = document.querySelector(".close3");
const feed = document.querySelector(".feedback");
close3.addEventListener("click", function () {
  if (feed.classList.toggle("active"))
    document.querySelector(".feedback").remove();
});
// jQueAy(function ($) {
//   $("a.findroute").click(function () {
//     var $target = $($(this).attr("href")),
//       $other = $target.siblings(".active"),
//       animIn = function () {
//         $target
//           .addClass("active")
//           .show()
//           .css({
//             left: $target.width(),
//           })
//           .animate(
//             {
//               left: 0,
//             },
//             500
//           );
//       };

//     if (!$target.hasClass("active") && $other.length > 0) {
//       $other.each(function (index, self) {
//         var $this = $(this);
//         $this.removeClass("active").animate(
//           {
//             left: -$this.width(),
//           },
//           500,
//           animIn
//         );
//       });
//     } else if (!$target.hasClass("active")) {
//       animIn();
//     }
//   });

//   $(".close").click(function () {
//     $(this)
//       .closest(".findroute")
//       .animate(
//         {
//           transform: translateX(0),
//         },
//         500
//       );
//   });
// });

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
  req.open("GET", "http://127.0.0.1:8000/get-pointnow", false);
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
              feature.properties.diachi +
              feature.properties.phuong +
              ".</br>" +
              "Mức độ ngập: " +
              feature.properties.mucdo_ngap +
              ".</br>" +
              "Tổng thời gian ngập: " +
              feature.properties.tong_thoigian_ngap +
              ".</br>" +
              "Thời gian báo ngập: " +
              feature.properties.thoigian_baongap
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

function getpointdemo() {
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
  document.getElementById("myCheck3").onclick = function (e) {
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
            fillColor: "green",
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
