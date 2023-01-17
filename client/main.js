
import { bindEvent, diceAnimation, disableElement, enableElement, getNode, getNodes, invisibleElement, visibleElement, insertLast, attr, clearContents, removeClass, memo } from "./lib/index.js";

const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');

const recordListWrapper = getNode('.recordListWrapper');

memo('@tbody',()=>getNode('.recordListWrapper tbody'));

// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)')
// const resetButton = getNode('.buttonGroup > button:nth-child(3)')
const cube = getNode('#cube');
console.log(memo);
let count = 0;
let sum = 0;

function renderRecordListItem() {
  let diceNumber = Number(attr(cube,'data-dice'));

  let template = /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${diceNumber}</td>
      <td>${sum += diceNumber}</td>
    </tr>
  `

  insertLast(memo('@tbody'),template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

/*


Event



*/

const handleRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;
  
  return () => {
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation,100);

      disableElement(recordButton);
      disableElement(resetButton);

    } else {
      clearInterval(stopAnimation);

      enableElement(recordButton);
      enableElement(resetButton);

    }
  
    isRolling = !isRolling;
  }
  })(); 

  const handleRecord =()=> {
    visibleElement(recordListWrapper);
    renderRecordListItem();
  }

  const handleReset =()=> {
    count = 0;
    sum = 0;

    invisibleElement(recordListWrapper);
    clearContents(memo("@tbody"));
    
  }

rollingDiceButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handleReset);
// let eventOff = bindEvent(rollingDiceButton,'click',handlerRollingDice);
