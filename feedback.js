
function validateForm() {
  let danhgia = document.forms["myForm"]["danhgia"].value;
  console.log(danhgia)
  let noidung = document.forms["myForm"]["noidung"].value;
  console.log(noidung)

  if (danhgia != '' && noidung != '') {
    const xhr = new XMLHttpRequest();
    var api = 'http://127.0.0.1:8000/feedback'
    xhr.open("POST", api, true);

    // // prepare form data
    let data = new FormData();
    data.append("danhgia", danhgia);
    data.append("noidung", noidung);
    xhr.send(data);
    console.log(xhr.responseText);
    console.log(xhr.status)
    xhr.onload = (null)
    {
      alert("Cảm ơn bạn đã đánh giá!")
    }


  }
  else { alert("Vui lòng đánh giá lại !"); }

}

