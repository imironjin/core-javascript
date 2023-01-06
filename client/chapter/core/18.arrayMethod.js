/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000];

console.log(typeof arr);

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === "array";
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};

arr.forEach(function (item,index) {
  this[index] = item;
},user);

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click',(e) => {
    console.log(e = "orange");
  })
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice
arr.splice(1,0,23,5);
console.log(arr);

// sort
arr.sort((a,b)=>a-b);
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기','미용실가기','코딩공부하기'];

let template = todo.map((todoList) => {
  return `<li>${todoList}</li>`
})

arr.map((item) => {
  console.log(item);
})
/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(999)); // false : -1

// lastIndexOf
// includes
console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

// find

const find = users.find((item,index)=> {
  return item.id === 3
})

console.log(find);
// findIndex

const findIndex = users.findIndex((item) => {
  return item.id === 3;
})

console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number) => {
  return number > 100;
})

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬저",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  }
];

// reduce

// 친구들 나이의 총합
let age = friends.reduce((acc,cur)=> {
  return acc + cur.age
},0)

console.log(age);

let template2 = todo.reduce((acc,cur,index)=> {
  return acc + `<li>할일 ${index+1} : ${cur}</li>`
},"")

console.log(template2);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";
// split
let nameArray = str.split(' ');
console.log(nameArray);

// join
console.log(nameArray.join(' / '));