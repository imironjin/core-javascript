/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */





const template = /* html */`
  <h1>
    <span class="first">hello</span>
    <!-- 주석이지롱 -->
    <span class="second">world</span>
  </h1>
`


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;


// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: "fixed",
    zIndex: 10000,
    top: "50%",
    left: "50%",
    width: "60vw",
    maxWidth: 800,
    height: "40vh",
    minHeight: 280,
    transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)


// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한


let authUser = null;



authUser = {
  uid:'user-id-asdA12k3klf',
  name: 'kindtiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
}



// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty){

  return {
     name:'unknown',
     email:'unknown@company.io',
     [computedProp]: '010-7169-0262'
  }
}

const user = createUser()

// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


Object.prototype.SIGN = true;

for(let key in authUser){
  if({}.hasOwnProperty.call(authUser,key)){
    // console.log(key);  
  }
}




// 프로퍼티 나열  authUser : 객체    key 만 모아놓은 배열, value 만 모아놓은
//                              배열 맨드러주세요

// let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);

// console.log(valueArray);

// arrow function
const getPropertiesList = object => Object.keys(object)

/* 
function getPropertiesList(object){
  let result = [];
  for(let key in object){
    if({}.hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }
   
  return result;
}
 */


let result = getPropertiesList(authUser) 



    //  remove  delete
// 프로퍼티 제거 or 삭제 


// 유틸 함수를 만들 수 있을것 같은데 .. ?

function removeProperty(object, key) {

  if(!(typeof object === 'object')) {
    throw new Error;
  }
  object[key] = null;
}

removeProperty(authUser, 'uid');






// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430
}

const { Ann, John, Pete } = salaries;
console.log(John);
