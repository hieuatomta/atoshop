
document.addEventListener('DOMContentLoaded', function(e) {

var fullname = document.getElementById('FullName').value;
var username = document.getElementById('username');
var password = document.getElementById('password').value;
var repass = document.getElementById('RePassword').value;
console.log(fullname);

},false);


// check dữ liệu fullname
function ckname() {
  if(checkrong('FullName','0')==false){
    if(document.getElementById('FullName').value.length<200){
      hiennutxanh('t');
    }
    else {
      hiennutdo('t');
    }
  }
  else {
    hiennutdo('t');
  }
}

// check dữ liệu tên tài khoảng
function tk() {
  if(checkrong('username','1')==false){
    let regex = /(\s)|\W/;
    let str = document.getElementById('username').value;
    str.trim();
    let kt = regex.test(str);
    console.log(kt);
    debugger;
    let bo = document.querySelectorAll('.noidungcanhbao');
      bo[1].innerHTML = 'Không có khoảng trắng';
    if(kt == false){
      hiennutxanh('t1');
      bo[1].classList.remove('le');

    }
    else {
      hiennutdo('t1');
      bo[1].classList.remove('an');
      bo[1].classList.add('le');
    }
  }
  else {
    hiennutdo('t1');
  }
}

// check dữ liêu email
function checkmail() {
  if(checkrong('Email',4)==false){
    let mail = document.getElementById('Email');
    let re = /\w+\@(\w)+\.+(\w{2,4})+$/;
    let str = mail.value;
    let kt = re.test(str);
    if(kt==true){
      hiennutxanh('t4');
    }
    else {
      //
      hiennutdo('t4');
      noidung(4,'Nhập email định dang xxxx@yyy.zzz');
    }
  }
  else {
    hiennutdo('t4');

  }

}

// check du lieu pass
function pass() {
  if(checkrong('password','2')==false){
    if(document.getElementById('password').value.length>5 &&document.getElementById('password').value.length<51){
      console.log(document.getElementById('password').value);
      hiennutxanh('t2');
      return true;
    }
    else {
        noidung(2,'Nhập mật khẩu từ 6 đến 50 ký tự');
        hiennutdo('t2');
    }
    return false;
  }
  else {
    hiennutdo('t2');
  }

}

// check du lieu repass
function repass() {
  if(pass()==true){
    if(checkrong('password','3')==false){
      if(pass()==true){
        if(document.getElementById('password').value == document.getElementById('RePassword').value){
          // console.log(document.getElementById('RePassword').value);
          hiennutxanh('t3');
        }
        else {
            noidung(3,'Nhập mật khẩu không khớp')
            hiennutdo('t3');
        }
      }
      else {
        hiennutdo('t3');
      }
    }
    else {
      hiennutdo('t3');
    }

  }
  else {
    noidung(3,'Vui lòng nhập phần mật khẩu');
    hiennutdo('t3');
  }
}


function checkngaysinh() {
  console.log(document.getElementById('ngaysinh').value);
  console.log(document.getElementById('ngaysinh').value.indexOf('-'));
  let nam = document.getElementById('ngaysinh').value.substring(0,4);
  let thang = document.getElementById('ngaysinh').value.substring(5,7);
  let ngay = document.getElementById('ngaysinh').value.substring(8,10);
  var date1 = new Date();
  console.log(date1.getFullYear());
  console.log(nam);
  console.log(thang);
  console.log(ngay);
  // debugger;
  if(checkrong('ngaysinh','5')==false){
    if(document.getElementById('ngaysinh').value.indexOf('-')<5){
      if(document.getElementById('ngaysinh').value.substring(0,4)<=date1.getFullYear()){
        // hiennutxanh('t5');
        if(document.getElementById('ngaysinh').value.substring(5,7)<=date1.getMonth()+1 ){
          // hiennutxanh('t5');
          if(document.getElementById('ngaysinh').value.substring(8,10)<=date1.getDate()){
            hiennutxanh('t5');
          }
          else {
            hiennutdo('t5');
            noidung(5,'Nhập ngày nhỏ hơn hiện tại!!');
          }
        }
        else {
          hiennutdo('t5');
          noidung(5,'Nhập ngày nhỏ hơn hiện tại!!');
        }
      }
      else {
        hiennutdo('t5');
        noidung(5,'Nhập ngày nhỏ hơn hiện tại!!');
      }
    }

    else {
      hiennutdo('t5');
      noidung(5,'Nhập ngày nhỏ hơn hiện tại!!');
    }
  }
  else {
    hiennutdo('t5');
  }
}
function checkdt() {
  if(checkrong('phone',6)==false){
    let rg1 = /^[0-9]+$/;
    let s1 = document.getElementById('phone').value;
    var k =  rg1.test(s1);
    if(s1.length==10){
      if(document.getElementById('phone').value.slice(0,1) == '0' ||document.getElementById('phone').value.slice(0,3) =='+84' || document.getElementById('phone').value.slice(0,2) =='84')
      {
        if(k == true){
            hiennutxanh('t6');
        }
        else {
          hiennutdo('t6');
        }
      }
      else {
        let bo = document.querySelectorAll('.noidungcanhbao');
          bo[6].innerHTML = 'Nhập số điện thoại sai! ';
          if(k == false){
            hiennutxanh('t6');
            bo[6].classList.remove('le');
          }
          else {
            hiennutdo('t6');
            bo[6].classList.remove('an');
            bo[6].classList.add('le');
          }
      }
    }
    else {
      noidung(6,"Số điện thoại có 10 số!!")
      hiennutdo('t6');

    }

  }
  else {
    hiennutdo('t6');
  }
}
function checkdata() {
    if (document.getElementById('FullName').value == ''){
         alert('Bạn chưa nhập họ và tên');
    }
    else if (username.value== ''){
         alert('Bạn chưa nhập tên tài khoản');
    }
     else if (password.value == '')
     {
         alert('Bạn chưa nhập mật khẩu');
     }
     else if (document.getElementById('RePassword').value == '')
     {
         alert('Bạn chưa nhập lai mật khẩu');
     }
     else if (document.getElementById('Email').value == '')
     {
         alert('Bạn chưa nhập email');
     }
     else if (document.getElementById('ngaysinh').value == '')
     {
         alert('Bạn chưa nhập ngày sinh!');
     }
     else if (document.getElementById('phone').value == '')
     {
         alert('Bạn chưa nhập số điện thoại');
     }
     else{
        alert("Thành công! Cảm ơn bạn!!");
         return true;
     }

     return false;
}

// in ra thông báo
function noidung(vitri,noidung) {
  let bo = document.querySelectorAll('.noidungcanhbao');
  bo[vitri].innerHTML = noidung;
  bo[vitri].classList.remove('an');
  bo[vitri].classList.add('le');
}


// 2 nut xanh va do
function hiennutxanh(id) {
  let nutcheck = document.getElementById(id);
  nutcheck.classList.add('fa-check')
  nutcheck.classList.remove('fa-times');
}
function hiennutdo(id) {
  let nutdo = document.getElementById(id);
  nutdo.classList.remove('fa-check')
  nutdo.classList.add('fa-times');
}

// kiểm tra xem input rỗng hay k?
function checkrong(id,i){
  var bo = document.querySelectorAll('.noidungcanhbao');
  if(document.getElementById(id).value.length==0){
    // console.log(bo);
      bo[i].innerHTML = 'Vui lòng nhập thông tin!!';
      bo[i].classList.add('le');
      bo[i].classList.remove('an');
      return true;
  }
  else {
      bo[i].classList.add('an');
  }
  return false;
}
