import { getNode } from "./lib/dom/getNode.js";
import { css } from "./lib/dom/css.js";

const doneBtn = getNode("#done");
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const result = getNode('.result');

function getInputValue(node) {
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용됩니다.')
  return node.value
}

function clearContents(node) {
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

const sum = (valueA, valueB) => valueA + valueB;

function handler(e) {
  e.preventDefault();

  let firstValue = parseInt(getInputValue(firstInput));
  let secondValue = parseInt(getInputValue(secondInput));
  let total = sum(firstValue,secondValue);

  console.log(total);

  clearContents('.result');

  insertLast('.result',total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  console.log(firstValue);
}

doneBtn.addEventListener('click',handler);

firstInput.addEventListener('change',inputHandler);