$(document).ready(function(){


// 모달 요소
let modal = `
<div class="modal">
  <div class="m_inner">
    <img src="./images/pc_prod_notice20230203.jpg" alt="모달베너">
    <p><input type="checkbox" id="ch"><label for="ch">일주일간 열지 않음</label><a href="#none" title="닫기">닫기</a></p>
  </div>
</div>
`;

$('body').append(modal);


// 쿠키 생성하기
let ch = $('.modal #ch');




// 쿠키 파일이 현재 브라우저에 존재한다면 모달 창이 안나오도록 한다.
if($.cookie('popup')=='none') {
  $('.modal').hide();
}

function closeModal(){
  if(ch.is(':checked')){  //체크박스 체크 된 경우

    // 쿠키를 생성
    $.cookie('popup','none',{expires:7,path:'/'});
  }
  $('.modal').hide();
}

// 닫기 버튼을 클릭하면 closeModal 함수를 동작하게 한다.

$('.modal a').click(function(){
  closeModal();
});

});