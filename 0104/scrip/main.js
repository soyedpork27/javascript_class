


// 작은 사진 변수에 저장
let s_img = document.querySelectorAll('.s_img');





for (let i = 0; i < s_img.length ; i++){
  s_img[i].addEventListener('click',imgChange);
}

function imgChange() {
  let url = this.src;
  console.log(url); // 이미지 전체 경로

  let big_url = document.getElementById('photo').src;

  // 선택한 주소의 문자를 기본 문자열과 대체하여 다시 url 저장
  url = url.replace(big_url,url);
  // 변경된 값을 이미지 속성 src에 대입하여 변경
  document.getElementById('photo').src=url;
}



