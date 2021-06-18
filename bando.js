const mymap = L.map('map').setView([10.807708, 106.710385], 15);
L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga', {
    maxZoom: 20,
}).addTo(mymap);

let startpoint = '';
let endpoint = '';

var geocoderA = new GoongGeocoder({
    accessToken: 'faketoken'
});
geocoderA.addTo('#geocoderA');

// Get the geocoder results container.
var results = document.getElementById('result');

// Add geocoder result to container.
geocoderA.on('result', function(e) {
    startpoint = e.result.result.geometry.location;
});

// Clear results container when search is cleared.
geocoderA.on('clear', function() {
    results.innerText = '';
});

var geocoderB = new GoongGeocoder({
    accessToken: 'faketoken'
});
geocoderB.addTo('#geocoderB');

// Get the geocoder results container.
var results = document.getElementById('result');

// Add geocoder result to container.
geocoderB.on('result', function(e) {
    endpoint = e.result.result.geometry.location;
});

// Clear results container when search is cleared.
geocoderB.on('clear', function() {
    results.innerText = '';
});

document.getElementById("btnDirection").addEventListener("click", function(e) {
    if (startpoint != '' && endpoint != '') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8000/direction', true);

        // prepare form data
        let data = new FormData();
        data.append("start", startpoint.lng + ' ' + startpoint.lat);
        data.append("end", endpoint.lng + ' ' + endpoint.lat);
        // set headers
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // send request
        xhr.send(data);

        // listen for `load` event
        xhr.onload = () => {
            if (mymap.hasLayer(directionLine)) {
                mymap.removeLayer(directionLine);
            }
            var directionLine = L.geoJson(JSON.parse(xhr.responseText), {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(feature.properties.seq);
                }
            }).addTo(mymap);
            mymap.fitBounds(directionLine.getBounds());
        }
    } else { alert('Vui lòng chọn địa chỉ tìm đường !'); }
});

// var req = new XMLHttpRequest();
// req.open("GET", "http://127.0.0.1:8000/get-point", false);
// req.send();
// console.log(req.status);
// console.log(req.responseText);


// let timeout = null;
// let arr = null;
// let startpoint = '';
// let endpoint = '';
// function autocomplete(inp) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function (e) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {

//             var req = new XMLHttpRequest();
//             req.open("GET", 'http://localhost:8000/autocomplete?input=' + e.target.value, false);
//             req.send();
//             arr = JSON.parse(req.responseText).description;
//             placeidarr = JSON.parse(req.responseText).placeid;
//             placeid = placeidarr[0];

//             var a, b, i, val = this.value;
//             /*close any already open lists of autocompleted values*/
//             closeAllLists();
//             if (!val) { return false; }
//             currentFocus = -1;
//             /*create a DIV element that will contain the items (values):*/
//             a = document.createElement("DIV");
//             a.setAttribute("id", this.id + "autocomplete-list");
//             a.setAttribute("class", "autocomplete-items");
//             /*append the DIV element as a child of the autocomplete container:*/
//             this.parentNode.appendChild(a);

//             /*for each item in the array...*/
//             for (i = 0; i < arr.length; i++) {
//                 /*create a DIV element for each matching element:*/
//                 b = document.createElement("DIV");
//                 b.innerHTML = arr[i];
//                 /*insert a input field that will hold the current array item's value:*/
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//                 /*execute a function when someone clicks on the item value (DIV element):*/
//                 b.addEventListener("click", function (e) {
//                     /*insert the value for the autocomplete text field:*/
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     placeid = placeidarr[arr.indexOf(inp.value)];
//                     var req = new XMLHttpRequest();
//                     req.open("GET", 'http://localhost:8000/place?input=' + placeid, false);
//                     req.send();
//                     if (inp == document.getElementById("direcA")) {
//                         startpoint = JSON.parse(req.responseText);
//                     }
//                     else if (inp == document.getElementById("direcB")) {
//                         endpoint = JSON.parse(req.responseText);
//                     }
//                     /*close the list of autocompleted values,
//                     (or any other open lists of autocompleted values:*/
//                     closeAllLists();
//                 });
//                 a.appendChild(b);
//             }
//         }, 500);
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function (e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             /*If the arrow DOWN key is pressed,
//             increase the currentFocus variable:*/
//             currentFocus++;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 38) { //up
//             /*If the arrow UP key is pressed,
//             decrease the currentFocus variable:*/
//             currentFocus--;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             /*If the ENTER key is pressed, prevent the form from being submitted,*/
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 /*and simulate a click on the "active" item:*/
//                 if (x) x[currentFocus].click();
//             }
//         }
//     });
//     function addActive(x) {
//         /*a function to classify an item as "active":*/
//         if (!x) return false;
//         /*start by removing the "active" class on all items:*/
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         /*add class "autocomplete-active":*/
//         x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//         /*a function to remove the "active" class from all autocomplete items:*/
//         for (var i = 0; i < x.length; i++) {
//             x[i].classList.remove("autocomplete-active");
//         }
//     }
//     function closeAllLists(elmnt) {
//         /*close all autocomplete lists in the document,
//         except the one passed as an argument:*/
//         var x = document.getElementsByClassName("autocomplete-items");
//         for (var i = 0; i < x.length; i++) {
//             if (elmnt != x[i] && elmnt != inp) {
//                 x[i].parentNode.removeChild(x[i]);
//             }
//         }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
// }