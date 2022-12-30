/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = prompt("지금은 언제인가요?");

// switch(thisTime) {
//   case MORNING:
//     alert("뉴스 기사 글을 읽는다.");
//     break;
//   case LUNCH:
//     alert("자주 가는 식당에 가서 식사를 한다");
//     break;
//   case DINNER:
//     alert("동네 한바퀴를 조깅한다.");
//     break;
//   case NIGHT:
//     alert("친구에게 전화를 걸어 수다를 떤다.");
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     alert("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
//     break;
// }

/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime == MORNING) {
  alert("아침코딩");
} else if(thisTime == LUNCH) {
  alert("코딩하면서 점심식사");
} else if(thisTime == DINNER) {
  alert("저녁코딩");
} else if(thisTime == NIGHT) {
  alert("밤샘코딩") 
} else if(thisTime == LATE_NIGHT || thisTime == DAWN) {
  alert("렘수면 코딩");
} else {
  alert("쥬금..");
}

/* switch vs. if -------------------------------------------------------- */

// let number = 5;
// Math.round