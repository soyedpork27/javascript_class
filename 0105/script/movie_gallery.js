
let n = 1;
const img_list = document.querySelectorAll('.lnb > li');

const left_btn = document.querySelector('i.fa-angle-left');
const right_btn = document.querySelector('i.fa-angle-right');

document.getElementById('page').innerHTML=n + "/16";


img_list.forEach((el, index) => {
  el.onclick=()=>{
    console.log(index+1);
    n = index+1;

    document.getElementById('page').innerHTML=n + "/16";

    document.getElementById('photo').src="./images/movie_image"+n+".jpg";


  }
});


left_btn.addEventListener('click',function() {
  if (n==1){
    n=16;
  }
  else{
    n--;
  }
  console.log(n);
  document.getElementById('page').innerHTML=`${n}/16`;
  document.getElementById('photo').src=`./images/movie_image${n}.jpg`;

});

right_btn.addEventListener('click', function(){
  if (n==16){
    n=1;
  }
  else{
    n++;
  }
  console.log(n);
  document.getElementById('page').innerHTML=`${n}/16`;
  document.getElementById('photo').src=`./images/movie_image${n}.jpg`;

  
});










// forEach( el, index) : 배열 전용 매서드(만들어져 있는 함수)
// 첫 번째 매개변수는 받은 요소를 의미.
// 두 번째 매개변수는 요소의 번호를 매긴다.


// let a = 1;
// let b = 2;

// function sum(a,b){
//   return a+b;
// }
// console.log(sum(5,7));