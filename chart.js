google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart);
// console.log(document.getElementsByClassName("dropdown-item year"));

// Draw the chart and set the chart values
function validate() {
  let type = document.forms["chart"]["types"].value;
  console.log(type);
  let year = document.forms["chart"]["years"].value;
  console.log(year);
  // let type = document.getElementById("types").value;
  // let year = document.getElementById("years").value;
  if (type == "loai" && year == "2017") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/17", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);

    var json = JSON.parse(req.responseText);
    console.log(typeof json.nghet);

    var data = google.visualization.arrayToDataTable([
      ["Task", "reports of Month"],
      ["Nghẹt", json.Nghet],
      ["Ngập", json.Ngap],
      ["Các sự cố về cơ sở hạ tầng khác", json.CSHT],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "loai" && year == "2018") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/18", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);

    var json = JSON.parse(req.responseText);
    console.log(typeof json.nghet);

    var data = google.visualization.arrayToDataTable([
      ["Task", "reports of Month"],
      ["Nghẹt", json.Nghet],
      ["Ngập", json.Ngap],
      ["Các sự cố về cơ sở hạ tầng khác", json.CSHT],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "loai" && year == "2019") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/19", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);

    var json = JSON.parse(req.responseText);
    console.log(typeof json.nghet);

    var data = google.visualization.arrayToDataTable([
      ["Task", "reports of Month"],
      ["Nghẹt", json.Nghet],
      ["Ngập", json.Ngap],
      ["Các sự cố về cơ sở hạ tầng khác", json.CSHT],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "loai" && year == "2020") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/20", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);

    var json = JSON.parse(req.responseText);
    console.log(typeof json.nghet);

    var data = google.visualization.arrayToDataTable([
      ["Task", "reports of Month"],
      ["Nghẹt", json.Nghet],
      ["Ngập", json.Ngap],
      ["Các sự cố về cơ sở hạ tầng khác", json.CSHT],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "loai" && year == "2021") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/21", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);

    var json = JSON.parse(req.responseText);
    console.log(typeof json.nghet);

    var data = google.visualization.arrayToDataTable([
      ["Task", "reports of Month"],
      ["Nghẹt", json.Nghet],
      ["Ngập", json.Ngap],
      ["Các sự cố về cơ sở hạ tầng khác", json.CSHT],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 350 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "time" && year == "2017") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-type/17", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Jan);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Jan", json.Jan],
      ["Feb", json.Feb],
      ["Mar", json.Mar],
      ["Apr", json.Apr],
      ["May", json.May],
      ["Jun", json.Jun],
      ["Jul", json.Jul],
      ["Aug", json.Aug],
      ["Sep", json.Sep],
      ["Oct", json.Oct],
      ["Nov", json.Nov],
      ["Dec", json.Dec],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "time" && year == "2018") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-type/18", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Jan);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Jan", json.Jan],
      ["Feb", json.Feb],
      ["Mar", json.Mar],
      ["Apr", json.Apr],
      ["May", json.May],
      ["Jun", json.Jun],
      ["Jul", json.Jul],
      ["Aug", json.Aug],
      ["Sep", json.Sep],
      ["Oct", json.Oct],
      ["Nov", json.Nov],
      ["Dec", json.Dec],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "time" && year == "2019") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-type/19", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Jan);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Jan", json.Jan],
      ["Feb", json.Feb],
      ["Mar", json.Mar],
      ["Apr", json.Apr],
      ["May", json.May],
      ["Jun", json.Jun],
      ["Jul", json.Jul],
      ["Aug", json.Aug],
      ["Sep", json.Sep],
      ["Oct", json.Oct],
      ["Nov", json.Nov],
      ["Dec", json.Dec],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "time" && year == "2020") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-type/20", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Jan);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Jan", json.Jan],
      ["Feb", json.Feb],
      ["Mar", json.Mar],
      ["Apr", json.Apr],
      ["May", json.May],
      ["Jun", json.Jun],
      ["Jul", json.Jul],
      ["Aug", json.Aug],
      ["Sep", json.Sep],
      ["Oct", json.Oct],
      ["Nov", json.Nov],
      ["Dec", json.Dec],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "time" && year == "2021") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-type/21", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Jan);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Jan", json.Jan],
      ["Feb", json.Feb],
      ["Mar", json.Mar],
      ["Apr", json.Apr],
      ["May", json.May],
      ["Jun", json.Jun],
      ["Jul", json.Jul],
      ["Aug", json.Aug],
      ["Sep", json.Sep],
      ["Oct", json.Oct],
      ["Nov", json.Nov],
      ["Dec", json.Dec],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2017") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/17", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2017") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/17", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2018") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/18", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2019") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/19", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2020") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/20", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  } else if (type == "area" && year == "2021") {
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/get-district/21", false);
    req.send(null);
    console.log(req.status);
    console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    console.log(typeof json.Quan1);

    var data = google.visualization.arrayToDataTable([
      ["Task", "số báo cáo/năm"],
      ["Quan1", json.Quan1],
      ["Quan2", json.Quan2],
      ["Quan3", json.Quan3],
      ["Quan4", json.Quan4],
      ["Quan5", json.Quan5],
      ["Quan6", json.Quan6],
      ["Quan7", json.Quan7],
      ["Quan8", json.Quan8],
      ["Quan9", json.Quan9],
      ["Quan10", json.Quan10],
      ["Quan11", json.Quan11],
      ["Quan12", json.Quan12],
      ["BinhChanh", json.BChanh],
      ["CuChi", json.CuChi],
      ["CanGio", json.CanGio],
      ["HocMon", json.HMon],
      ["ThuDuc", json.TDuc],
      ["BinhThanh", json.BThanh],
      ["TanBinh", json.TBinh],
      ["TanPhu", json.TPhu],
      ["BinhTan", json.BTan],
      ["NhaBe", json.NBe],
      ["GoVap", json.GVap],
      ["PhuNhuan", json.PNhuan],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { width: 400, height: 450 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(
      document.getElementById("mychart")
    );
    chart.draw(data, options);
  }
}

function validatacmt() {
  var x = document.getElementById("cmt");
  var y = document.getElementById("cmt2");
  var z = document.getElementById("cmt3");
  document.getElementById("comment1").onclick = function (e) {
    if (this.checked) {
      let type = document.forms["chart"]["types"].value;
      console.log(type);
      let year = document.forms["chart"]["years"].value;
      console.log(year);
      if (
        type == "loai" &&
        (year == "2017" ||
          year == "2018" ||
          year == "2019" ||
          year == "2020" ||
          year == "2021")
      ) {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      } else if (
        type == "time" &&
        (year == "2017" ||
          year == "2018" ||
          year == "2019" ||
          year == "2020" ||
          year == "2021")
      ) {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
      } else if (
        type == "area" &&
        (year == "2017" ||
          year == "2018" ||
          year == "2019" ||
          year == "2020" ||
          year == "2021")
      ) {
        y.style.display = "none";
        x.style.display = "none";
        z.style.display = "block";
      }
    } else {
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "none";
    }
  };
}

// $(document).ready(function () {
//   $(".glyphicon-plus").click(function () {
//     $(this)
//       .parent("div")
//       .find(".glyphicon-plus")
//       .toggleClass("glyphicon-minus");
//   });
//   $(".glyphicon-plus").dblclick(function () {
//     $(this)
//       .parent("div")
//       .find(".glyphicon-plus")
//       .toggleClass("glyphicon-minus");
//   });
// });

const card = document.querySelector("#submit");
const cmts = document.querySelectorAll("overflow-auto comment");
card.addEventListener("dblclick", function (e) {
  cmts.classList.toggle("display");
});

// document.getElementById("submit").addEventListener("click", toggleClick, false);
// document
//   .getElementById("nhanxet")
//   .addEventListener("click", toggleClick, false);
// function on_off() {
//   if (this.id == "submit") {
//     document.getElementById("mychart").disabled = false;
//     document.getElementById("submit").className = "bando";
//   } else {
//     document.getElementById("nhanxet").className = "comments";
//     document.getElementById("cmt").disabled = true;
//   }
// }

// const bieudo = document.querySelector("#submit");
// bieudo.addEventListener("click", function () {
//   bieudo.classList.toggle("active");
//   document.querySelector("#chart").classList.toggle("active");
//   document.querySelector("#nhanxet").classList.toggle("inactive");
// });

// {
//   {
//     document.getElementById("nhanxet").addEventListener("click", function () {
//       document.getElementById("cmt").style.displays = block;
//       document.getElementById("cmt2").style.displays = none;
//     });
//   }
// } else if (
//   type == "time" &&
//   (year == "2017" ||
//     year == "2018" ||
//     year == "2019" ||
//     year == "2020" ||
//     year == "2021")
// ) {
//   {
//     document.getElementById("nhanxet").addEventListener("click", function () {
//       document.getElementById("cmt2").style.display = block;
//       document.getElementById("cmt").style.display = none;
//     });
//   }
// }
// }

// function drawChart17() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/17", false);
//     req.send(null);
//     console.log(req.status);
//     console.log(req.responseText);

//     var json = JSON.parse(req.responseText)
//     console.log(typeof(json.nghet))

//     var data = google.visualization.arrayToDataTable([
//       ['Task', 'reports of Month'],
//       ['Nghẹt', json.Nghet],
//       ['Ngập', json.Ngap],
//       ['Các sự cố về cơ sở hạ tầng khác', json.CSHT]
//     ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'width':400, 'height':550};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('mychart'));
//   chart.draw(data, options);
// }

// function drawChart18() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/18", false);
//     req.send(null);
//     console.log(req.status);
//     console.log(req.responseText);

//     var json = JSON.parse(req.responseText)
//     console.log(typeof(json.nghet))

//     var data = google.visualization.arrayToDataTable([
//       ['Task', 'reports of Month'],
//       ['Nghẹt', json.Nghet],
//       ['Ngập', json.Ngap],
//       ['Các sự cố về cơ sở hạ tầng khác', json.CSHT]
//     ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'width':400, 'height':550};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('mychart'));
//   chart.draw(data, options);
// }
// function drawChart19() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/19", false);
//     req.send(null);
//     console.log(req.status);
//     console.log(req.responseText);

//     var json = JSON.parse(req.responseText)
//     console.log(typeof(json.nghet))

//     var data = google.visualization.arrayToDataTable([
//       ['Task', 'reports of Month'],
//       ['Nghẹt', json.Nghet],
//       ['Ngập', json.Ngap],
//       ['Các sự cố về cơ sở hạ tầng khác', json.CSHT]
//     ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'width':400, 'height':550};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('mychart'));
//   chart.draw(data, options);
// }

// function drawChart20() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/20", false);
//     req.send(null);
//     console.log(req.status);
//     console.log(req.responseText);

//     var json = JSON.parse(req.responseText)
//     console.log(typeof(json.nghet))

//     var data = google.visualization.arrayToDataTable([
//       ['Task', 'reports of Month'],
//       ['Nghẹt', json.Nghet],
//       ['Ngập', json.Ngap],
//       ['Các sự cố về cơ sở hạ tầng khác', json.CSHT]
//     ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'width':400, 'height':550};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('mychart'));
//   chart.draw(data, options);
// }

// function drawChart21() {
//     var req = new XMLHttpRequest();
//     req.open("GET", "http://127.0.0.1:8000/get-thongke/by-year/21", false);
//     req.send(null);
//     console.log(req.status);
//     console.log(req.responseText);

//     var json = JSON.parse(req.responseText)
//     console.log(typeof(json.nghet))

//     var data = google.visualization.arrayToDataTable([
//       ['Task', 'reports of Month'],
//       ['Nghẹt', json.Nghet],
//       ['Ngập', json.Ngap],
//       ['Các sự cố về cơ sở hạ tầng khác', json.CSHT]
//     ]);

//   // Optional; add a title and set the width and height of the chart
//   var options = {'width':400, 'height':550};

//   // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('mychart'));
//   chart.draw(data, options);
// }

// function drawyear17() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-type/17", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Jan))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Jan', json.Jan],
//   ['Feb', json.Feb],
//   ['Mar', json.Mar],
//   ['Apr', json.Apr],
//   ['May', json.May],
//   ['Jun', json.Jun],
//   ['Jul', json.Jul],
//   ['Aug', json.Aug],
//   ['Sep', json.Sep],
//   ['Oct', json.Oct],
//   ['Nov', json.Nov],
//   ['Dec', json.Dec]
// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawyear18() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-type/18", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Jan))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Jan', json.Jan],
//   ['Feb', json.Feb],
//   ['Mar', json.Mar],
//   ['Apr', json.Apr],
//   ['May', json.May],
//   ['Jun', json.Jun],
//   ['Jul', json.Jul],
//   ['Aug', json.Aug],
//   ['Sep', json.Sep],
//   ['Oct', json.Oct],
//   ['Nov', json.Nov],
//   ['Dec', json.Dec]
// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawyear19() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-type/19", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Jan))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Jan', json.Jan],
//   ['Feb', json.Feb],
//   ['Mar', json.Mar],
//   ['Apr', json.Apr],
//   ['May', json.May],
//   ['Jun', json.Jun],
//   ['Jul', json.Jul],
//   ['Aug', json.Aug],
//   ['Sep', json.Sep],
//   ['Oct', json.Oct],
//   ['Nov', json.Nov],
//   ['Dec', json.Dec]
// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawyear20() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-type/20", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Jan))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Jan', json.Jan],
//   ['Feb', json.Feb],
//   ['Mar', json.Mar],
//   ['Apr', json.Apr],
//   ['May', json.May],
//   ['Jun', json.Jun],
//   ['Jul', json.Jul],
//   ['Aug', json.Aug],
//   ['Sep', json.Sep],
//   ['Oct', json.Oct],
//   ['Nov', json.Nov],
//   ['Dec', json.Dec]
// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawyear21() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-type/21", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Jan))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Jan', json.Jan],
//   ['Feb', json.Feb],
//   ['Mar', json.Mar],
//   ['Apr', json.Apr],
//   ['May', json.May],
//   ['Jun', json.Jun],
//   ['Jul', json.Jul],
//   ['Aug', json.Aug],
//   ['Sep', json.Sep],
//   ['Oct', json.Oct],
//   ['Nov', json.Nov],
//   ['Dec', json.Dec]
// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawdist17() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-district/17", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Quan1))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Quan1', json.Quan1],
//   ['Quan2', json.Quan2],
//   ['Quan3', json.Quan3],
//   ['Quan4', json.Quan4],
//   ['Quan5', json.Quan5],
//   ['Quan6', json.Quan6],
//   ['Quan7', json.Quan7],
//   ['Quan8', json.Quan8],
//   ['Quan9', json.Quan9],
//   ['Quan10', json.Quan10],
//   ['Quan11', json.Quan11],
//   ['Quan12', json.Quan12],
//   ['BinhChanh', json.BChanh],
//   ['CuChi', json.CuChi],
//   ['CanGio', json.CanGio],
//   ['HocMon', json.HMon],
//   ['ThuDuc', json.TDuc],
//   ['BinhThanh', json.BThanh],
//   ['TanBinh', json.TBinh],
//   ['TanPhu', json.TPhu],
//   ['BinhTan', json.BTan],
//   ['NhaBe', json.NBe],
//   ['GoVap', json.GVap],
//   ['PhuNhuan', json.PNhuan]

// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawdist18() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-district/18", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Quan1))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Quan1', json.Quan1],
//   ['Quan2', json.Quan2],
//   ['Quan3', json.Quan3],
//   ['Quan4', json.Quan4],
//   ['Quan5', json.Quan5],
//   ['Quan6', json.Quan6],
//   ['Quan7', json.Quan7],
//   ['Quan8', json.Quan8],
//   ['Quan9', json.Quan9],
//   ['Quan10', json.Quan10],
//   ['Quan11', json.Quan11],
//   ['Quan12', json.Quan12],
//   ['BinhChanh', json.BChanh],
//   ['CuChi', json.CuChi],
//   ['CanGio', json.CanGio],
//   ['HocMon', json.HMon],
//   ['ThuDuc', json.TDuc],
//   ['BinhThanh', json.BThanh],
//   ['TanBinh', json.TBinh],
//   ['TanPhu', json.TPhu],
//   ['BinhTan', json.BTan],
//   ['NhaBe', json.NBe],
//   ['GoVap', json.GVap],
//   ['PhuNhuan', json.PNhuan]

// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawdist19() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-district/19", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Quan1))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Quan1', json.Quan1],
//   ['Quan2', json.Quan2],
//   ['Quan3', json.Quan3],
//   ['Quan4', json.Quan4],
//   ['Quan5', json.Quan5],
//   ['Quan6', json.Quan6],
//   ['Quan7', json.Quan7],
//   ['Quan8', json.Quan8],
//   ['Quan9', json.Quan9],
//   ['Quan10', json.Quan10],
//   ['Quan11', json.Quan11],
//   ['Quan12', json.Quan12],
//   ['BinhChanh', json.BChanh],
//   ['CuChi', json.CuChi],
//   ['CanGio', json.CanGio],
//   ['HocMon', json.HMon],
//   ['ThuDuc', json.TDuc],
//   ['BinhThanh', json.BThanh],
//   ['TanBinh', json.TBinh],
//   ['TanPhu', json.TPhu],
//   ['BinhTan', json.BTan],
//   ['NhaBe', json.NBe],
//   ['GoVap', json.GVap],
//   ['PhuNhuan', json.PNhuan]

// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawdist20() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-district/20", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Quan1))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Quan1', json.Quan1],
//   ['Quan2', json.Quan2],
//   ['Quan3', json.Quan3],
//   ['Quan4', json.Quan4],
//   ['Quan5', json.Quan5],
//   ['Quan6', json.Quan6],
//   ['Quan7', json.Quan7],
//   ['Quan8', json.Quan8],
//   ['Quan9', json.Quan9],
//   ['Quan10', json.Quan10],
//   ['Quan11', json.Quan11],
//   ['Quan12', json.Quan12],
//   ['BinhChanh', json.BChanh],
//   ['CuChi', json.CuChi],
//   ['CanGio', json.CanGio],
//   ['HocMon', json.HMon],
//   ['ThuDuc', json.TDuc],
//   ['BinhThanh', json.BThanh],
//   ['TanBinh', json.TBinh],
//   ['TanPhu', json.TPhu],
//   ['BinhTan', json.BTan],
//   ['NhaBe', json.NBe],
//   ['GoVap', json.GVap],
//   ['PhuNhuan', json.PNhuan]

// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }

// function drawdist21() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/get-district/21", false);
//   req.send(null);
//   console.log(req.status);
//   console.log(req.responseText);
//   var json = JSON.parse(req.responseText);
//   console.log(typeof(json.Quan1))

//   var data = google.visualization.arrayToDataTable([
//   ['Task', 'reports of Year'],
//   ['Quan1', json.Quan1],
//   ['Quan2', json.Quan2],
//   ['Quan3', json.Quan3],
//   ['Quan4', json.Quan4],
//   ['Quan5', json.Quan5],
//   ['Quan6', json.Quan6],
//   ['Quan7', json.Quan7],
//   ['Quan8', json.Quan8],
//   ['Quan9', json.Quan9],
//   ['Quan10', json.Quan10],
//   ['Quan11', json.Quan11],
//   ['Quan12', json.Quan12],
//   ['BinhChanh', json.BChanh],
//   ['CuChi', json.CuChi],
//   ['CanGio', json.CanGio],
//   ['HocMon', json.HMon],
//   ['ThuDuc', json.TDuc],
//   ['BinhThanh', json.BThanh],
//   ['TanBinh', json.TBinh],
//   ['TanPhu', json.TPhu],
//   ['BinhTan', json.BTan],
//   ['NhaBe', json.NBe],
//   ['GoVap', json.GVap],
//   ['PhuNhuan', json.PNhuan]

// ]);

// // Optional; add a title and set the width and height of the chart
// var options = {'width':400, 'height':550};

// // Display the chart inside the <div> element with id="piechart"
// var chart = new google.visualization.BarChart(document.getElementById('mychart'));
// chart.draw(data, options);
// }
