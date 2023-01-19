/* global gsap */
import { renderUserCard, getNode, ironjin, changeColor, delayP, renderSpinner, renderEmptyCard, removeClass, attr } from "./lib/index.js";


let userCardInner = getNode(".user-card-inner");
let deleteBtn = getNode('.delete');

async function rendingUserList (){

  renderSpinner(userCardInner);

  try{
  // 2초 뒤에 렌더링이 될 수 있도록
  await delayP(2000)

  getNode('.loadingSpinner').remove();

  let response = await ironjin.get("http://localhost:3000/users")
  
  let userData = response.data;

    userData.forEach((data) => {
    renderUserCard(userCardInner,data)
  });

  // gsap을 활용한 유저카드 출력
  
  changeColor('.user-card');

  gsap.to(gsap.utils.toArray('.user-card'),
  {
    x:0,
    opacity:1,
    duration:1.5,
    stagger:0.2
  })

} catch(error) {
  renderEmptyCard(userCardInner);
}
}

rendingUserList();
//ajax get user List 

function handler(e){
  // delete버튼은 closest로 버튼이면서 article이다
  // 누른 대상의 인접한 버튼찾기
  // 누른 대상의 인접한 article찾기
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  // 누른 대상의 인접한 대상이 article이 아니면 실행 안함
  // 누른 대상의 인접한 대상이 delete버튼이 없거나, 누른 대상의 인접한 대상이 article이 없으면 return한다.
  if(!deleteButton || !article) return;
  


  let id = attr(article,'data-index').slice(5);

  ironjin.delete(`http://localhost:3000/users/${id}`).then(()=>{
    // innerHtml을 비우고 다시 유저리스트를 rendering
    userCardInner.innerHTML = '';
    rendingUserList();
  })
}


userCardInner.addEventListener('click',handler)