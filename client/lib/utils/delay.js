import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first');


// function delay(callback,timeout = 1000) {

//   setTimeout(callback,timeout);
// }
//   delay(()=>{
//     first.style.top = "-100px";
//     delay(()=>{
//       first.style.transform = "rotate(360deg)";
//       delay(()=> {
//         first.style.top = '0px';
//       })
//     })
//   })
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다',
}

export function delayP(options = {}) {
  // 전개연산자.. 참조가 아닌 복사 ... 을 쓰면 안의 내용물이 다 전개돼서 담김
  let config = {...defaultOptions};
  
  if(isNumber(options)) {
    config.timeout = options;
  }

  if(isObject(options)) {
    // Mixin을 통해서 복사해온 config파일에 매개변수로 받아온 options로 대체한다
    config = {...config, ...options};
  }

  // 그 후 구조분해할당으로 선언
  const {shouldReject,data,errorMessage,timeout} = config


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  }) 
}


// delayP(3000).then((res)=>{console.log(res)});

// delayP({
//   shouldReject: true,
//   timeout: 1500,
//   data: "changed 성공",
//   errorMessage: "changed 에러메시지"
// }).then((res)=>{
//   console.log(res);
// })

// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then((res)=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '100px';
// })

// delayP().then((result)=>{
//   console.log(result);
// })


// async function delayA() {
//   return '완료'
// }

// let result = await delayA()

// console.log(result);