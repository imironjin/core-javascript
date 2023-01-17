import { typeError } from "../error/typeError.js";
import { isString } from "./typeOf.js";





export const memo = (() => {
  const cache = {}

  return(key,callback) => {
  if(!isString(key)) typeError('memo 함수의 첫 번째 인자는 문자 타입이어야 합니다.');
  if(!callback) return cache[key];

  if(cache[key]) {
    console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
    return;
  }

  cache[key] = callback();

  console.log(cache);
}

})();

// console.log(memo('name',()=>'tiger'));