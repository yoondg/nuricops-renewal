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
                subMenu.style.display = 'flex';
                ul.style.display = 'flex';
                // 서브메뉴 나타남
            });

            item.addEventListener('mouseleave', () => {
                subMenu.style.display = 'none'; // 서브메뉴 숨김
            });
        }
    });
});