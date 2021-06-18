google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// console.log(document.getElementsByClassName("dropdown-item year"));

// Draw the chart and set the chart values
function drawtype17() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/17", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    
    var json = JSON.parse(req.responseText)
    console.log(typeof(json.nghet))
    
    var data = google.visualization.arrayToDataTable([
    ['Task', 'reports of Month'],
    ['Nghet', json.nghet],
    ['Ngap', json.ngap],
    ['Khac', json.khac]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':550};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}

function drawtype18() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/18", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    
    var json = JSON.parse(req.responseText)
    console.log(typeof(json.nghet))
    
    var data = google.visualization.arrayToDataTable([
    ['Task', 'reports of Month'],
    ['Nghet', json.nghet],
    ['Ngap', json.ngap],
    ['Khac', json.khac]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':550};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}
function drawtype19() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/19", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    
    var json = JSON.parse(req.responseText)
    console.log(typeof(json.nghet))
    
    var data = google.visualization.arrayToDataTable([
    ['Task', 'reports of Month'],
    ['Nghet', json.nghet],
    ['Ngap', json.ngap],
    ['Khac', json.khac]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':550};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}

function drawtype20() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/20", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    
    var json = JSON.parse(req.responseText)
    console.log(typeof(json.nghet))
    
    var data = google.visualization.arrayToDataTable([
    ['Task', 'reports of Month'],
    ['Nghet', json.nghet],
    ['Ngap', json.ngap],
    ['Khac', json.khac]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':550};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}

function drawtype21() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/21", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    
    var json = JSON.parse(req.responseText)
    console.log(typeof(json.nghet))
    
    var data = google.visualization.arrayToDataTable([
    ['Task', 'reports of Month'],
    ['Nghet', json.nghet],
    ['Ngap', json.ngap],
    ['Khac', json.khac]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':550};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}








function drawyear17() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-type/17", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Jan))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Jan', json.Jan],
  ['Feb', json.Feb],
  ['Mar', json.Mar],
  ['Apr', json.Apr],
  ['May', json.May],
  ['Jun', json.Jun],
  ['Jul', json.Jul],
  ['Aug', json.Aug],
  ['Sep', json.Sep],
  ['Oct', json.Oct],
  ['Nov', json.Nov],
  ['Dec', json.Dec]
]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}

function drawyear18() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-type/18", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Jan))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Jan', json.Jan],
  ['Feb', json.Feb],
  ['Mar', json.Mar],
  ['Apr', json.Apr],
  ['May', json.May],
  ['Jun', json.Jun],
  ['Jul', json.Jul],
  ['Aug', json.Aug],
  ['Sep', json.Sep],
  ['Oct', json.Oct],
  ['Nov', json.Nov],
  ['Dec', json.Dec]
]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}

function drawyear19() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-type/19", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Jan))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Jan', json.Jan],
  ['Feb', json.Feb],
  ['Mar', json.Mar],
  ['Apr', json.Apr],
  ['May', json.May],
  ['Jun', json.Jun],
  ['Jul', json.Jul],
  ['Aug', json.Aug],
  ['Sep', json.Sep],
  ['Oct', json.Oct],
  ['Nov', json.Nov],
  ['Dec', json.Dec]
]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}

function drawyear20() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-type/20", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Jan))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Jan', json.Jan],
  ['Feb', json.Feb],
  ['Mar', json.Mar],
  ['Apr', json.Apr],
  ['May', json.May],
  ['Jun', json.Jun],
  ['Jul', json.Jul],
  ['Aug', json.Aug],
  ['Sep', json.Sep],
  ['Oct', json.Oct],
  ['Nov', json.Nov],
  ['Dec', json.Dec]
]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}

function drawyear21() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-type/21", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Jan))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Jan', json.Jan],
  ['Feb', json.Feb],
  ['Mar', json.Mar],
  ['Apr', json.Apr],
  ['May', json.May],
  ['Jun', json.Jun],
  ['Jul', json.Jul],
  ['Aug', json.Aug],
  ['Sep', json.Sep],
  ['Oct', json.Oct],
  ['Nov', json.Nov],
  ['Dec', json.Dec]
]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}



function drawdist17() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-district/17", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Quan1))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Quan1', json.Quan1],
  ['Quan2', json.Quan2],
  ['Quan3', json.Quan3],
  ['Quan4', json.Quan4],
  ['Quan5', json.Quan5],
  ['Quan6', json.Quan6],
  ['Quan7', json.Quan7],
  ['Quan8', json.Quan8],
  ['Quan9', json.Quan9],
  ['Quan10', json.Quan10],
  ['Quan11', json.Quan11],
  ['Quan12', json.Quan12],
  ['BinhChanh', json.BChanh],
  ['CuChi', json.CuChi],
  ['CanGio', json.CanGio],
  ['HocMon', json.HMon],
  ['ThuDuc', json.TDuc],
  ['BinhThanh', json.BThanh],
  ['TanBinh', json.TBinh],
  ['TanPhu', json.TPhu],
  ['BinhTan', json.BTan],
  ['NhaBe', json.NBe],
  ['GoVap', json.GVap],
  ['PhuNhuan', json.PNhuan]

]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}


function drawdist18() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-district/18", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Quan1))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Quan1', json.Quan1],
  ['Quan2', json.Quan2],
  ['Quan3', json.Quan3],
  ['Quan4', json.Quan4],
  ['Quan5', json.Quan5],
  ['Quan6', json.Quan6],
  ['Quan7', json.Quan7],
  ['Quan8', json.Quan8],
  ['Quan9', json.Quan9],
  ['Quan10', json.Quan10],
  ['Quan11', json.Quan11],
  ['Quan12', json.Quan12],
  ['BinhChanh', json.BChanh],
  ['CuChi', json.CuChi],
  ['CanGio', json.CanGio],
  ['HocMon', json.HMon],
  ['ThuDuc', json.TDuc],
  ['BinhThanh', json.BThanh],
  ['TanBinh', json.TBinh],
  ['TanPhu', json.TPhu],
  ['BinhTan', json.BTan],
  ['NhaBe', json.NBe],
  ['GoVap', json.GVap],
  ['PhuNhuan', json.PNhuan]

]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}


function drawdist19() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-district/19", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Quan1))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Quan1', json.Quan1],
  ['Quan2', json.Quan2],
  ['Quan3', json.Quan3],
  ['Quan4', json.Quan4],
  ['Quan5', json.Quan5],
  ['Quan6', json.Quan6],
  ['Quan7', json.Quan7],
  ['Quan8', json.Quan8],
  ['Quan9', json.Quan9],
  ['Quan10', json.Quan10],
  ['Quan11', json.Quan11],
  ['Quan12', json.Quan12],
  ['BinhChanh', json.BChanh],
  ['CuChi', json.CuChi],
  ['CanGio', json.CanGio],
  ['HocMon', json.HMon],
  ['ThuDuc', json.TDuc],
  ['BinhThanh', json.BThanh],
  ['TanBinh', json.TBinh],
  ['TanPhu', json.TPhu],
  ['BinhTan', json.BTan],
  ['NhaBe', json.NBe],
  ['GoVap', json.GVap],
  ['PhuNhuan', json.PNhuan]

]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}


function drawdist20() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-district/20", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Quan1))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Quan1', json.Quan1],
  ['Quan2', json.Quan2],
  ['Quan3', json.Quan3],
  ['Quan4', json.Quan4],
  ['Quan5', json.Quan5],
  ['Quan6', json.Quan6],
  ['Quan7', json.Quan7],
  ['Quan8', json.Quan8],
  ['Quan9', json.Quan9],
  ['Quan10', json.Quan10],
  ['Quan11', json.Quan11],
  ['Quan12', json.Quan12],
  ['BinhChanh', json.BChanh],
  ['CuChi', json.CuChi],
  ['CanGio', json.CanGio],
  ['HocMon', json.HMon],
  ['ThuDuc', json.TDuc],
  ['BinhThanh', json.BThanh],
  ['TanBinh', json.TBinh],
  ['TanPhu', json.TPhu],
  ['BinhTan', json.BTan],
  ['NhaBe', json.NBe],
  ['GoVap', json.GVap],
  ['PhuNhuan', json.PNhuan]

]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}


function drawdist21() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:8000/get-district/21", false);
  req.send(null);
  console.log(req.status);
  console.log(req.responseText);
  var json = JSON.parse(req.responseText);
  console.log(typeof(json.Quan1))
  
  var data = google.visualization.arrayToDataTable([
  ['Task', 'reports of Year'],
  ['Quan1', json.Quan1],
  ['Quan2', json.Quan2],
  ['Quan3', json.Quan3],
  ['Quan4', json.Quan4],
  ['Quan5', json.Quan5],
  ['Quan6', json.Quan6],
  ['Quan7', json.Quan7],
  ['Quan8', json.Quan8],
  ['Quan9', json.Quan9],
  ['Quan10', json.Quan10],
  ['Quan11', json.Quan11],
  ['Quan12', json.Quan12],
  ['BinhChanh', json.BChanh],
  ['CuChi', json.CuChi],
  ['CanGio', json.CanGio],
  ['HocMon', json.HMon],
  ['ThuDuc', json.TDuc],
  ['BinhThanh', json.BThanh],
  ['TanBinh', json.TBinh],
  ['TanPhu', json.TPhu],
  ['BinhTan', json.BTan],
  ['NhaBe', json.NBe],
  ['GoVap', json.GVap],
  ['PhuNhuan', json.PNhuan]

]);

// Optional; add a title and set the width and height of the chart
var options = {'width':400, 'height':550};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.BarChart(document.getElementById('mychart'));
chart.draw(data, options);
}





