$(document).ready(function(){

  const black = $('header h1 img').attr('src').replace('-white','-black');
  const white = $('header h1 img').attr('src').replace('-black','-white');

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);


    if (sPos > 700) {
      $('header').addClass('h_on');
      $('header .gnb a').addClass('on');
      $('header h1 img').attr('src',black);
      $('i.fas').css('color','#333');
      $('#next_btn').fadeOut();
    }
    else {
      $('header').removeClass('h_on');
      $('header .gnb a').removeClass('on');
      $('header h1 img').attr('src',white);
      $('i.fas').css('color','#fff');
      $('#next_btn').fadeIn();
    }
  });

  $('header').hover(function(){
    $(this).addClass('h_on');
    $('header .gnb a').addClass('on');
    $('header h1 img').attr('src',black);
    $('i.fas').css('color','#333');
    $('#next_btn').fadeOut();
  },function(){
    $(this).removeClass('h_on');
    $('header .gnb a').removeClass('on');
    $('header h1 img').attr('src',white);
    $('i.fas').css('color','#fff');
    $('#next_btn').fadeIn();
  });

  $('#next_btn').click(function(){
    let hei = $('#top3').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
  });


  $('.gnb > li:first-child, #m_nav li:first-child').click(function(){
    const hei = $('#intro').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
    return false;
  });

  $('.gnb > li:nth-child(2), #m_nav li:nth-child(2)').click(function(){
    const hei = $('#test').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
    return false;
  });

  $('.gnb > li:nth-child(3), #m_nav li:nth-child(3)').click(function(){
    const hei = $('#event').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
    return false;
  });

  $('.gnb > li:nth-child(4), #m_nav li:nth-child(4)').click(function(){
    const hei = $('#buy').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
    return false;
  });

  $('.gnb > li:last-child, #m_nav li:last-child').click(function(){
    const hei = $('#cs').offset().top - 75;
    $('html, body').animate({'scrollTop':hei},500);
    return false;
  });


  let gnb = $('.gnb> li, #m_nav li');

  gnb.click(function(){
    
  });

});


const slide = document.querySelector('.slide_banner');

const slide_li = document.querySelectorAll('.slide_banner li');

const slide_w = 1000;

let Timer = setInterval(moveLeft,4000);

let n = 0;

// 왼쪽으로 움직이는 함수
function moveLeft(){
  if ( n == 3){
    n=0;
  }
  else{
    n++;
  }
  slide.style.marginLeft=`${-slide_w*n}px`;

  
  // for (let i = 0 ; i<4 ; i++ ){
  // //   slide_li[i].setAttribute('class','');
  // slide_li.classList.remove('on');
  // }
  // // slide_li[n].setAttribute('class','on');
  // slide_li[n].classList.add('on');
}

// 오른쪽으로 움직이는 함수
function moveRight(){
  switch(n) {
    case 0 : n=3; break;
    case 1 : n=0; break;
    case 2 : n=1; break;
    case 3 : n=2; break;
  }
  slide.style.marginLeft=`${-slide_w*n}px`;
  
  // for (let i = 0 ; i<4 ; i++ ){
  // //   slide_li[i].setAttribute('class','');
  // slide_li[i].classList.remove('on');
  // }
  // // slide_li[n].setAttribute('class','on');
  // slide_li[n].classList.add('on');

}

// 왼쪽 버튼 클릭 이벤트
document.querySelector('.fa-angle-left').addEventListener('click',moveRight);

// 오른쪽 버튼 클릭 이벤트
document.querySelector('.fa-angle-right').addEventListener('click',moveLeft);

// 배너 마우스 엔터 시 이벤트
document.querySelector('.slide_wrap').addEventListener('mouseover',function(){
  clearInterval(Timer);
});

// 배너 마우스 아웃 시 이벤트
document.querySelector('.slide_wrap').addEventListener('mouseout',function(){
  clearInterval(Timer);
  Timer = setInterval(moveLeft,4000);
});








