//모든 div 선택
let element = document.querySelectorAll('.animation');

//화면에서 스크롤이 생겼을 때 발생하는 함수
window.addEventListener('scroll', function(){
  //스크롤 위치값 저장
  let scrollPosition = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  // 각 애니메이션 요소 반복
  element.forEach(element => {
    let elementPosition = element.offsetTop;
    if(scrollPosition > elementPosition - windowHeight + 500){
      element.classList.add('animate');
    }else{
      element.classList.remove('animate');
    }
  })

})