


$(document).ready(function(){

  // 마우스를 올리면
  let gnb = $('.gnb');
  gnb.mouseenter(function(){
    $('#h_bottom').stop().animate({'height' : '320px'},500,'easeInExpo');
    $('.sub').delay(400).fadeIn();
  });

  // 마우스를 빼면
  gnb.mouseleave(function(){
    $('#h_bottom').stop().animate({'height' : '46px'},500,'easeInExpo');
    $('.sub').fadeOut();
  });



  // 메인 좌, 우 슬라이드


  let left_btn = $('i.fa-angle-left');
  let right_btn = $('i.fa-angle-right');

  let img_width = $('.slide img').width();
  


  
  let = img_w = $('.slide img').width();
  $(window).resize(function(){
      img_w = $('.slide img').width();
      $('.slide ul').css('margin-left', -img_w);
  })

  // 1. 5번 이미지를 1번의 앞쪽으로 자리를 재배치한다.


  $('.slide li:last-child').insertBefore('.slide li:first-child');
  $('.slide ul').css('margin-left', -img_width);

  // 2. 시간마다 왼쪽으로 움직이는 함수를 만든다
  function moveLeft(){
    console.log('왼쪽 이동');
    $('.slide ul').animate({'margin-left': -img_width*2},500, function(){
      $('.slide li:first-child').insertAfter('.slide li:last-child');
      $('.slide ul').css('margin-left',-img_width);
    });
  }
  let Timer = setInterval(moveLeft,3000);



  // 3. 시간마다 오른쪽으로 움직이는 함수를 만든다
  function moveRight(){
    console.log('왼쪽 이동');
    $('.slide ul').animate({'margin-left':'0'},500, function(){
      $('.slide li:last-child').insertBefore('.slide li:first-child');
      $('.slide ul').css('margin-left',+'%');
    });
  }


  left_btn.click(function(){
    moveLeft();
  });


  right_btn.click(function(){
    moveRight();
  });


  // 마우스 오버 시 시간을 제거하고 아웃 시 시간을 살린다. 
  $('.slide i.fas').hover(function(){
    clearInterval(Timer);
  },function(){
    Timer = setInterval(moveLeft,3000);
  }
  );







});