

const slide = document.querySelector('#slide');  // ul 태그 가져옴
const slide_img = document.querySelectorAll('#slide > li'); // ul 안의 li 태그들을 가져옴 (5개)

const prev_btn = document.getElementById('left_btn');  // 왼쪽 버튼 가져옴
const next_btn = document.getElementById('right_btn');  // 오른쪽 버튼 가져옴

const img_num = slide_img.length;  // 이미지의 수 구함

const liw = 100; // li 태그의 길이

const i_count = 1;  // 화면에 보여지기 희망하는 이미지 수

const btn = document.querySelectorAll('.button');


let count = 0;



console.log (slide, slide_img, prev_btn, next_btn, img_num);

slide.style.width = (liw)*img_num + '%';


function mslide(n){
  slide.style.left = liw*-n + '%';
  count = n;
  console.log(slide.style.left);
}

prev_btn.addEventListener('click', function(){
  if (count > 0){
    mslide(count-1);
  }
  else {
    mslide(img_num-i_count);
  }
  clearInterval(Timer);
});

next_btn.addEventListener('click', function(){
  if (count < img_num-i_count){
    mslide(count+1);
  }
  else {
    mslide(0);
  }
  clearInterval(Timer);
});





let Timer = setInterval(function(){
  if (count < img_num-i_count){
    mslide(count+1);
  }
  else{
    mslide(0);
  }
},5000);





prev_btn.addEventListener('mouseout',function(){
  for (let i = 0 ; i < btn.length ; i++){
    Timer = setInterval((function(){
      if (count < img_num-i_count){
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
      if (count < img_num-i_count){
      mslide(count+1);
      }
      else{
        mslide(0);
      }}
      ),3000);
  }
  }
);