//한 페이지에서 보여줄 개수
// tr, 몇개인지 알아보기
let rowsPerPage = 10;
let rows = document.querySelectorAll('#my-table tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/rowsPerPage);
let numbers = document.querySelector('#numbers');

//페이지네이션 3개씩 보이게 하는 변수들 추가
let prevPageBtn = document.querySelector('.pagination .fa-left-long');
let nextPageBtn = document.querySelector('.pagination .fa-right-long');


let pageActiveIdx = 0;//현재 보고있는 페이지 그룹
let currentPageNum = 0;//현재 보고있는 페이지네이션 번호
let maxPageNum = 3;//페이지 그룹 최대 개수

//페이지 번호 생성
for(let i = 1; i <= pageCount; i++){
  //numbers.innerHTML ='<li><a href="">'+i+'</a></li>'
  // numbers.innerHTML = `<li><a href="">${i}</a></li>`
  numbers.innerHTML +=  `<li><a href="">${i}</a></li>`;
}
let numberBtn  = numbers.querySelectorAll('a');

numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', (e)=>{
    for(nb of numberBtn){
      e.preventDefault();
      nb.classList.remove('active');
    }
    e.target.classList.add('active')
    //테이블 출력함수 
    console.log(idx)
    displayRow(idx);
  });
});
function displayRow(idx){
  /* 
  idx 0
  100개 목록
  10개씩 보여주기
  0 ~ 9
  slice(start, end)
  slice(0, 10)
  splice 오려내기
  nodelist, htmlcollection > array
  배열로 바꿔주는 방법
  Array.from(대상)
  [..대상]
  */

  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = Array.from(rows);
  console.log(rowsArray);

  for (ra of rowsArray){
    ra.style.display='none'
  }
  let newRows = rowsArray.slice(start, end);
  for (let nr of newRows){
    nr.style.display=''
  }
  for (let nb of numberBtn){
    nb.classList.remove('active');
  }
  numberBtn[idx].classList.add('active')
}
displayRow(0)


//페이지네이션 그룹 표시함수
function displayPage(num){
  //페이지네이션 감추기
  for(let nb of numberBtn){
    nb.style.display = 'none'
  }
  //전체 페이지개수
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  let pageArr = Array.from(numberBtn);
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);
  //console.log(num, start, end, pageArr, pageListArr);
  //pageListArr을 배열에 모든 요소 item 반복
  for(let item of pageListArr){
    item.style.display = 'block'
  }
  //첫 번째 페이지일 경우 이전페이지 화살표 안보이게
  if(pageActiveIdx === 0){
    prevPageBtn.style.display = 'none'
  }else{
    prevPageBtn.style.display = 'block'
  }
  //마지막 페이지일 경우 다음페이지 화살표 안보이게
  if(pageActiveIdx == totalPageCount - 1){
    nextPageBtn.style.display = 'none'
  }else{
    nextPageBtn.style.display = 'block'
  }
}


//초기 페이지네이션 그룹 로드
displayPage(0);

//다음 페이지 버튼 클릭 이벤트
nextPageBtn.addEventListener('click', function(){
  //이전 페이지의 시작 인덱스 계산
  //현재 페이지의 마지막 인덱스 + 1
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  //해당 인덱스부터 시작하는 데이터를 화면에 표시
  displayRow(nextPageNum);
  //인덱스를 1씩 증가
  ++pageActiveIdx;
  
  //활성화된 페이지의 인덱스를 기준으로 페이지 버튼 업데이트
  displayPage(pageActiveIdx);
});

//이전 페이지 버튼 클릭 이벤트
prevPageBtn.addEventListener('click', function(){
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;

  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});
