
// 변수 몇 개 선언해야 하는가?

const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const prev_btn = document.getElementById('prev_btn');
const next_btn = document.getElementById('next_btn');
const btn = document.querySelectorAll('.button');

const img_n = slide_img.length;

const img_w = 300;  // li 태그의 너비
const m = 30;       // 간격
const s_con = 3;    // 한 페이지에 보여질 개수

let count = 0;



// 감싸는 부모요소의 너비를 구하기

slide.style.width=(img_w+m)*img_n-m+'px';



function mslide(n){
  slide.style.left=(img_w+m)*-n+'px';
  count = n;
  console.log(slide.style.left);
  console.log(count);
}







// 왼쪽 버튼을 클릭 시 왼쪽 방향으로 움직이게 한다.

prev_btn.addEventListener('click',function(){
  if(count > 0){
    mslide(count-1);
  }
  else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer);
}
);



// 오른쪽 버튼을 클릭 시 오른쪽 방향으로 움직이게 한다.

next_btn.addEventListener('click',function(){
  if (count < img_n-s_con){
    mslide(count+1);
  }
  else{
    mslide(0);
  }
  clearInterval(Timer);
}
);






// 매 5초마다 함수 호출
let Timer = setInterval(function(){
  if (count < img_n-s_con){
    mslide(count+1);
  }
  else{
    mslide(0);
  }
},5000);


// 마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하여 자동으로 움직이게 한다.

prev_btn.addEventListener('mouseout',function(){
  for (let i = 0 ; i < btn.length ; i++){
    Timer = setInterval((function(){
      if (count < img_n-s_con){
      mslide(count+1);
      }
      else{
        mslide(0);
      }}
      ),3000);
  }
  }
);


next_btn.addEventListener('mouseout',function(){
  for (let i = 0 ; i < btn.length ; i++){
    Timer = setInterval((function(){
      if (count > img_n-s_con){
      mslide(count+1);
      }
      else{
        mslide(0);
      }}
      ),3000);
  }
  }
);
