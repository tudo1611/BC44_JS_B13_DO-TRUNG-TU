
//Bài 1: tính tiền lương nhân viên

document.getElementById("btnTinhLuong").onclick = function () {
  //input: donGia: number. soNgay: number
  // output : tongLuong: number
  // progress :
  var donGia = document.getElementById("donGia").value;
  var soNgay = document.getElementById("soNgay").value;
  // check input
  // console.log('donGia',donGia);
  // console.log('soNgay',soNgay);
  var tongLuong = 0;
  tongLuong = donGia * soNgay;
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
};





//Bài 2: tính giá trị trung bình
document.getElementById('btnTinhTB').onclick = function () {
    //input: các giá trị nhập vào:number
    // output : tinhTrungBinh:number
    var nhapSo1 = document.getElementById('nhapSo1').value;
    var nhapSo2 = document.getElementById('nhapSo2').value;
    var nhapSo3 = document.getElementById('nhapSo3').value;
    var nhapSo4 = document.getElementById('nhapSo4').value;
    var nhapSo5 = document.getElementById('nhapSo5').value;
    //check input
    // console.log('nhapSo1',nhapSo1);
    // console.log('nhapSo2',nhapSo2);
    // console.log('nhapSo3',nhapSo3);
    // console.log('nhapSo4',nhapSo4);
    // console.log('nhapSo5',nhapSo5);
    var tinhTrungBinh = 0;
    tinhTrungBinh =
      (parseFloat(nhapSo1) +
        parseFloat(nhapSo2) +
        parseFloat(nhapSo3) +
        parseFloat(nhapSo4) +
        parseFloat(nhapSo5)) /
      5;
    document.getElementById('tinhTrungBinh').innerHTML = tinhTrungBinh;
}




//Bài 3: quy đổi tiền
document.getElementById('doiTien').onclick = function () {
    var soTienUSD = document.getElementById('soTienUSD').value;
    var soTien = 0;
    soTien = soTienUSD * 23500;
    document.getElementById('soTien').innerHTML = soTien.toLocaleString();
}




//bài 4: tính diện tích, chu vi hình chữ nhật
document.getElementById('tinhKQ').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    chuVi = 'Chu vi:' + (parseFloat(chieuDai) + parseFloat(chieuRong)) * 2;
    dienTich = 'Diện tích:' + chieuDai * chieuRong + ';';
    document.getElementById('dienTich').innerHTML = dienTich;
    document.getElementById('chuVi').innerHTML = chuVi;
} 



        //  Bài 5: Tính tổng 2 ký số 
document.getElementById('tinhTong').onclick = function () {
    var nhapSo = document.getElementById('nhapSo').value;
    var tongKySo = 0;
    var hangChuc = Math.floor(nhapSo / 10);
    var donVi = nhapSo % 10;
    tongKySo = parseFloat(hangChuc) + parseFloat(donVi);
    document.getElementById('tongKySo').innerHTML = tongKySo;

}
