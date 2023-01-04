/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney;


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

let pow = (numeric, powerCount) => {
  let result = 1;
  for(let i = 0; i< powerCount; i++) {
    result *= numeric;
    
  }
  return result;
};

let powExpression = (numeric, powerCount) => {
  return Array(powerCount).fill(null).reduce(acc=> acc * numeric,1)
};


// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = "";
  for(let i = 0; i<repeatCount; i++) {
    result += text;
  }
  return result;
}; 

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc=> acc + text,'');

const user = {
  name: "tiger",
  age: 32,
  address:"서울시 노원구",
  grades:[80,90,100],
  totalGrades: ()=> {
    let total = 0;
    this.grades.forEach((item) => {
      total += item
      
    })
    return total;
  }
}

console.log(user.totalGrades);

