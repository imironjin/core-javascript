import { addClass, clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, removeClass, syntaxError, textCopy, toggleClass } from './lib/index.js';
import { jujeobData } from "./data/data.js";
import { showAlert } from './lib/dom/showAlert.js';


const submit = getNode('#submit');
const result = getNode('.result');

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  if(!name) {
    showAlert(".alert-error","이름을 입력해주세요!",2000);
    // addClass(result,'shake');
    // setTimeout(() => {
    //   removeClass(result,'shake');
    // },1000);
    gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    return
  }

  if(isNumericString(name)) {
    showAlert(".alert-error","정확한 이름을 입력해주세요!", 2000);
    return
  }

  clearContents(result);
  insertLast(result,pick);
  
  
}

function clickCopyHandler() {
  let text = result.textContent;
  textCopy(text).then(()=> {
    showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000);
  })

}

submit.addEventListener('click',clickSubmitHandler);
result.addEventListener('click', clickCopyHandler)