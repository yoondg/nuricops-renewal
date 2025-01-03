/* 헤더 */
// document.addEventListener("DOMContentLoaded", function() {
//   // 모든 nav 항목을 가져옴
//   const navItems = document.querySelectorAll('header nav ul li');

//   // 각 nav 항목에 마우스 오버 및 아웃 이벤트 추가
//   navItems.forEach(item => {
//       const subMenu = item.querySelector('.sub');
//       const ul = item.querySelector('.sub');
      

//       if(subMenu,navItems) {
//           item.addEventListener('mouseenter', () => {
//               subMenu.style.display = 'flex';
//               ul.style.display = 'flex';
//               // 서브메뉴 나타남
//           });

//           item.addEventListener('mouseleave', () => {
//               subMenu.style.display = 'none'; // 서브메뉴 숨김
//           });
//       }
//   });
// });



// //반응형 내비게이션
// let accordionItems = document.querySelectorAll('.accordion-item');
//   // 첫 번째 아코디언을 열어놓음
//   accordionItems[0].querySelector('.accordion-content').style.display = 'block';
//   accordionItems.forEach(function(item) {
//     const title = item.querySelector('.accordion-title');
//     const content = item.querySelector('.accordion-content');
//     title.addEventListener('click', function() {
//       // 모든 아코디언 내용을 숨김
//       accordionItems.forEach(function(i) {
//         i.querySelector('.accordion-content').style.display = 'none';
//       });
//       // 클릭한 아코디언 내용만 표시
//       content.style.display = 'block';
//     });
//   });





/* 탑 버튼 */
let btn = document.getElementById('gototop');
let doc = document.documentElement;
let scrollAmount; //스크롤의 양
window.addEventListener('scroll',function(){
  scrollAmount = doc.scrollTop;
  if(scrollAmount > 100){
    btn.classList.add('visible');
  }else{
    btn.classList.remove('visible');
  }
})

//클릭했을 때 맨 위로 스크롤
btn.addEventListener('click', function(event){
  event.preventDefault(); 
  window.scroll({
    top:0,
    behavior:'smooth'
  });
})







/* 선생님 수정본 */
/* 헤더 */
document.addEventListener("DOMContentLoaded", function() {
  // 모든 nav 항목을 가져옴
  const navItems = document.querySelectorAll('header nav ul li');

  // 각 nav 항목에 마우스 오버 및 아웃 이벤트 추가
  navItems.forEach(item => {
      const subMenu = item.querySelector('.sub');
      const ul = item.querySelector('.sub');
      

      if(subMenu,navItems) {
          item.addEventListener('mouseenter', () => {
              subMenu.style.opacity = '1';
              ul.style.opacity = '1';
              // 서브메뉴 나타남
          });

          item.addEventListener('mouseleave', () => {
              subMenu.style.opacity = '0'; // 서브메뉴 숨김
          });
      }
  });
});

/* 아코디언 */

  let accordionItems = document.querySelectorAll('.accordion-item');

// 첫 번째 아코디언을 열어놓음
// accordionItems[0].querySelector('.accordion-content').style.display = 'block';

accordionItems.forEach(function(item) {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  
  title.addEventListener('click', function() {
    // 이미 열려있는 아코디언을 닫기 위한 변수
    const isOpen = content.style.display === 'block';

    // 모든 아코디언 내용을 숨김
    accordionItems.forEach(function(i) {
      i.querySelector('.accordion-content').style.display = 'none';
    });

    // 클릭한 아코디언이 이미 열려있으면 닫기, 아니면 열기
    if (!isOpen) {
      content.style.display = 'block';
    }
  });
});

  // .menu-icon을 클릭하면 .accordion을 토글하는 기능
  document.querySelector('.menu-icon').addEventListener('click', function() {
    // .accordion 요소 선택
    const accordionMenu = document.querySelector('.accordion');
  
    // active 토글 (클래스가 없으면 추가, 있으면 제거)
    accordionMenu.classList.toggle('active');
  });
  
  // 모든 .accordion-title 요소에 클릭 이벤트 추가
  document.querySelectorAll('.accordion-title').forEach(function(title) {
    title.addEventListener('click', function() {
      // 클릭된 아코디언의 다음 요소(.accordion-content)를 찾음
      const content = this.nextElementSibling;
  
      // 모든 아코디언 콘텐츠를 닫음
      document.querySelectorAll('.accordion-content').forEach(function(c) {
        c.classList.remove('active');
      });
  
      // 클릭한 아코디언의 콘텐츠가 이미 열려있다면 닫음
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // 열린 아코디언이 없을 경우에만 열림
        content.style.maxHeight = content.scrollHeight + "px"; // 콘텐츠의 실제 높이를 가져와서 max-height 설정
        content.classList.add('active');
      }
    });
  });