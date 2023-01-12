/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(first.className);


function addClass(node,className) {

  if(typeof node === "string") {
    node = getNode(node);
  }

  if(typeof className !== 'string') {
    typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }

  node.classList.add(className);
}

addClass('.first',"hello");

function removeClass(node,className) {
  if(typeof node === "string") {
    node = getNode(node);
  }

  if(!className) {
    node.className="";
    return;
  }

  if(typeof className !== 'string') {
    typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }

  
  node.classList.remove(className);
}

function toggleClass(node,className) {
  if(typeof node === "string") {
    node = getNode(node);
  }
  if(typeof className !== 'string') {
    typeError("toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }

  
  node.classList.toggle(className);
}

toggleClass(".first","is-active");
/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

let size = getComputedStyle(first).margin;
console.log(size);

// 자바스크립트에선 객체의 key,value값을 변수로 받기 위해서는 . 사용
function getCss(node,prop) {
  if(typeof node === "string") {
    node = getNode(node);
  }
  if(!(prop in document.body.style)) {
    syntaxError("getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.")
  }
  return getComputedStyle(node)[prop];
}

console.log(getCss(".first",'font-size'));

function setCss(node,prop,value) {
  if(typeof node === "string") {
    node = getNode(node);
  }
  if(!value) {
    syntaxError("setCss 함수의 세 번째 인자는 필수값 입니다.")
  }

  node.style[prop] = value;

}

setCss('.first','color','blue');

function css(node,prop,value) {
  return !value ? getCss(node,prop) : setCss(node,prop,value);
}