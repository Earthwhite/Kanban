const ba = document.getElementById('btn');
const su = document.getElementById('sub');
const no = document.getElementById('nosk');
const la = document.getElementById('lay');
const al = document.getElementById('alb');

ba.addEventListener('click',look_b);
su.addEventListener('click',look_s);
no.addEventListener('click',look_n);
la.addEventListener('click',look_l);
al.addEventListener('click',look_a);

let b = 0;
let s = 0;
let n = 0;
let l = 0;
let a = 0;
function look_b(){
    b = b + 1;
    cal();
}
function look_s(){
    s = s + 1;
    cal();
}
function look_n(){
    n = n + 1;
    cal();
}
function look_l(){
    l = l + 1;
    cal();
}
function look_a(){
    a = a + 1;
    cal();
}
function cal(){
const goods = [b,s,n,l,a];
let max = 0;
goods.map((o) => {
  max = Math.max(max, o);
})

let x;

if(max == a){
    x = "albion online";
}else if(max == s){
    x = "เรือดำน้ำ";
}else if(max == n){
    x = "nosk";
}else if(max == l){
    x = "lay";
}else if(max == b){
    x = "กล้วย";
}

most.command(x)
}


const most = {
    command(x) {
        console.log("กล้วยดู",b,"คร้ง");
        console.log("เรือดำน้ำดู",s,"คร้ง");
        console.log("สินค้าดู",n,"คร้ง");
        console.log("เลย์ดู",l,"คร้ง");
        console.log("albion online ดู",a,"คร้ง");
        console.log("สินค้าที่มากที่สุดคือ",x);
    },
};
