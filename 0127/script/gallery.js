

$(document).ready(function(){

  let g_navi = $('.g_navi a');

  let g_list = $('.g_list a');


  // 갤러리 gnb 버튼 변수들
  let total_btn = $('.g_navi li:first-child a');
  let plan_btn = $('.g_navi li:nth-child(2) a');
  let design_btn = $('.g_navi li:nth-child(3) a');
  let ui_btn = $('.g_navi li:nth-child(4) a');
  let coding_btn = $('.g_navi li:last-child a');
  




  $(g_navi).click(function(){
    $(g_navi).removeClass('act');
    $(this).addClass('act');
    return false;
  });


  // 갤러리 이미지 오버 시 서식
  $('.g_list li').hover(function(){
    $(this).find('span').stop().animate({'bottom':'0'},300);
    $(this).find('img').animate({'border-radius':'50% 5%'},300);
  },function(){
    // $(this).find('span').stop().animate({'bottom':'-40px'},300);
    $('.caption').stop().animate({'bottom':'-40px'},300);
  });


  g_list.click(function(){
    let src = $(this).attr('href');
    let title = $(this).find('span').text();
    let img_n = $(this).parent().index()+1;
    console.log(src);

    let t_num = $('.total').length;

    let modal = `
    <div class="modal">
      <div class="center">
        <h3>${title}</h3>
        <img src="${src}" alt="">
        <i class="fas fa-times"></i>
        <i class="fas fa-angle-left"></i>
        <i class="fas fa-angle-right"></i>
        <span class="index">${img_n}/${t_num}</span>

      </div>
    </div>
    `;

    $('body').append(modal);

    $('.modal i.fa-times').click(function(){
      console.log('클릭');
      $('.modal').fadeOut();
    });

    $('.modal i.fa-angle-left').click(function(){
      moveLeft();
    });

    $('.modal i.fa-angle-right').click(function(){
      moveRight();
    });


    // img_n 값을 체크하여 확장자를 따로 할당
    function imgCheck(){
      if(img_n==4 || img_n==9 || img_n==11){
        $('.modal img').attr('src',`./images/img${img_n}.png`);
      }
      else{
        $('.modal img').attr('src',`./images/img${img_n}.jpg`);
      }

      // 캡션 바꾸기
      $('.center h3').empty();
      $('.center h3').text($(`.g_list li:nth-child(${img_n})`).find('span').text());

      // 숫자 바꾸기
      $('.index').empty()
      $('.index').text(`${img_n}/${t_num}`)
    }


    // 왼쪽 버튼 함수
    function moveLeft(){
      if(img_n == 1){
        img_n = 12 ;
      }
      else{
        img_n--;
      }
      imgCheck();
      

    }



    // 오른쪽 버튼 함수
    function moveRight(){
      if(img_n == 12){
        img_n = 1 ;
      }
      else{
        img_n++;
      }
      console.log(img_n);

      imgCheck();

    }







    return false;
  });


  // 갤러리 gnb 클릭 시 해당 이미지만 나오도록 하기

  plan_btn.click(function(){
    $('.total').hide();
    $('.plan').fadeIn();
  });

  design_btn.click(function(){
    $('.total').hide();
    $('.design').fadeIn();
  });

  coding_btn.click(function(){
    $('.total').hide();
    $('.coding').fadeIn();
  });

  ui_btn.click(function(){
    $('.total').hide();
    $('.ui').fadeIn();
  });

  total_btn.click(function(){
    $('.total').hide();
    $('.total').fadeIn();
  });



});

