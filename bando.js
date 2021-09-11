var iconOptions = {
  iconUrl: "./img/start.png",
  iconSize: [50, 50],
};

// Creating a custom icon
var customIcon = L.icon(iconOptions);
var markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
  icon: customIcon,
};

var iconend = {
  iconUrl: "./img/finish-line.png",
  iconSize: [50, 50],
};

// Creating a custom icon
var customIcon = L.icon(iconend);
var markerend = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
  icon: customIcon,
};

let startpoint = "";
let endpoint = "";

var geocoderA = new GoongGeocoder({
  accessToken: "faketoken",
});
geocoderA.addTo("#geocoderA");
// console.log(geocoderA);

// Get the geocoder results container.
var results = document.getElementById("result");

// Add geocoder result to container.
geocoderA.on("result", function (e) {
  startpoint = e.result.result.geometry.location;
  lat = e.result.result.geometry.location.lat;
  lng = e.result.result.geometry.location.lng;
  var markerstart = L.marker([lat, lng], markerOptions);
  markerstart.bindPopup("Điểm đầu").openPopup();
  markerstart.addTo(mymap);

  // Clear results container when search is cleared.
  geocoderA.on("clear", function () {
    results.innerText = "";
    mymap.removeLayer(markerstart);
    mymap.removeLayer(directionLine);
  });
});

var geocoderB = new GoongGeocoder({
  accessToken: "faketoken",
});
geocoderB.addTo("#geocoderB");

// Get the geocoder results container.
var results = document.getElementById("result");

// Add geocoder result to container.
geocoderB.on("result", function (e) {
  endpoint = e.result.result.geometry.location;
  lat = e.result.result.geometry.location.lat;
  lng = e.result.result.geometry.location.lng;
  var markerends = L.marker([lat, lng], markerend);
  markerends.bindPopup("Điểm cuối").openPopup();
  markerends.addTo(mymap);

  // Clear results container when search is cleared.
  geocoderB.on("clear", function () {
    results.innerText = "";
    mymap.removeLayer(markerends);
    mymap.removeLayer(directionLine);
  });
});

var directionLine = {};
function timduongngap() {
  document
    .getElementById("btnDirection1")
    .addEventListener("click", function (e) {
      if (startpoint != "" && endpoint != "") {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8000/direction", true);

        // prepare form data
        let data = new FormData();
        data.append("start", startpoint.lng + " " + startpoint.lat);
        data.append("end", endpoint.lng + " " + endpoint.lat);
        // set headers
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // send request
        xhr.send(data);

        // listen for `load` event
        xhr.onload = () => {
          mymap.removeLayer(directionLine);

          if (this.checked) {
            directionLine = L.geoJson(JSON.parse(xhr.responseText), {
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.seq);
              },
            });

            mymap.addLayer(directionLine);
            mymap.fitBounds(directionLine.getBounds());
          } else {
            mymap.removeLayer(directionLine);
          }
        };
      } else {
        alert("Vui lòng chọn địa chỉ tìm đường !");
      }
    });
}

function timduongthuong() {
  document
    .getElementById("btnDirection2")
    .addEventListener("click", function (e) {
      if (startpoint != "" && endpoint != "") {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8000/directionnormal", true);

        // prepare form data
        let data = new FormData();
        data.append("start", startpoint.lng + " " + startpoint.lat);
        data.append("end", endpoint.lng + " " + endpoint.lat);
        // set headers
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // send request
        xhr.send(data);

        // listen for `load` event
        xhr.onload = () => {
          mymap.removeLayer(directionLine);
          if (this.checked) {
            directionLine = L.geoJson(JSON.parse(xhr.responseText), {
              onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.seq);
              },
            });

            mymap.addLayer(directionLine);
            mymap.fitBounds(directionLine.getBounds());
          } else {
            mymap.removeLayer(directionLine);
          }
        };
      } else {
        alert("Vui lòng chọn địa chỉ tìm đường !");
      }
    });
}
