google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// console.log(document.getElementsByClassName("dropdown-item year"));

// Draw the chart and set the chart values
function drawChart17() {
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

function drawChart18() {
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
function drawChart19() {
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

function drawChart20() {
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

function drawChart21() {
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