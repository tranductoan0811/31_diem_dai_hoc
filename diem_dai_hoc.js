function tinhdiem() {
let math, liter, english, area,area_score;

math = +document.getElementById("math").value;
liter = +document.getElementById("liter").value;
english = +document.getElementById("eng").value;
area = document.getElementById("area_score").value;
area_score = 0;

switch (area) {
  case "kv1":
    area_score += parseFloat(0.75);
    break;
  case "KV2_NT":
    area_score += parseFloat(0.5);
    break;
  case "kv2":
    area_score += parseFloat(0.25);
    break;
  case "kv3":
    area_score += parseFloat(0);
    break;
}

let sum = ("Tổng điểm của thí sinh là: " + parseFloat(math + liter + english + area_score) + " điểm.");

let diemkvuc = ("Điểm ưu tiên khu vực là: " + parseFloat(area_score) + " điểm.");

document.getElementById("diemkv").innerHTML = diemkvuc;

document.getElementById("result").innerHTML = sum;

}