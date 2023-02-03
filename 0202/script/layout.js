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